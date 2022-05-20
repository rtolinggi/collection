import prisma from "../utils/db.js";
import ErrorResponse from "../utils/errorRespons.js";
import { bcrypt, hashPassword } from "../utils/password.js";
import jwt from "jsonwebtoken";
import { accessToken, refreshToken } from "../utils/token.js";
import crypto from "crypto";
import sendEmail from "../config/emailConfig.js";
import constant from "../constants/index.js";

// Login Controller
const login = async (req, res, next) => {
  const { email, password } = req.body;

  // validate input user
  if (!email || !password) {
    return next(new ErrorResponse("All FIeld Is Required", 400));
  }

  // getUser by Email
  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    return next(new ErrorResponse());
  }

  // validate email
  if (!user)
    return next(
      new ErrorResponse("Email Not Found Please Register to Login", 401)
    );

  // validate password
  if (user && !(await bcrypt.compare(password, user.password))) {
    return next(new ErrorResponse("Invalid Credential", 401));
  }

  // validate isVerified User
  const isVerifiedEmail = JSON.parse(constant.EMAIL_VERIFIED_USER);
  if (isVerifiedEmail && !user.isVerified)
    return next(
      new ErrorResponse(
        "Please Verified Your Email To Before Access Login",
        401
      )
    );

  // Success Login

  // 1. Create Refersh Token
  const refresh_token = refreshToken(user.id);
  const access_token = accessToken(user.id);

  // 2. Update Field RefreshToken in database user
  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: refresh_token,
      },
    });
  } catch (error) {
    return next(new ErrorResponse());
  }

  //  3. send response token and cookie on client
  res.cookie("refresh_token", refresh_token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    access_token,
    refresh_token,
  });

  return res.status(200);
};

// Register Controller
const register = async (req, res, next) => {
  const { username, email, password, password_confirmation } = req.body;

  // validasi input user
  if (!username || !email || !password || !password_confirmation) {
    return next(new ErrorResponse("All field Is Required", 400));
  }

  //validasi password confirmation
  if (password !== password_confirmation) {
    return next(new ErrorResponse("Password Not Match", 400));
  }

  // validasi email exist
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return next(new ErrorResponse("Email Already Exist", 400));
    }
  } catch (error) {
    return next(new ErrorResponse());
  }

  //Store Data Table User
  const data = {
    username,
    email,
    password: await hashPassword(password),
  };

  let user;
  try {
    user = await prisma.user.create({ data });
  } catch (error) {
    return next(new ErrorResponse(error?.message));
  }

  // Create Token For email verified
  if (user) {
    const token = crypto.randomBytes(32).toString("hex");
    const url = `${constant.BASE_URL}api/auth/${user.id}/verify/${token}`;
    let storeTokenEmail;
    try {
      storeTokenEmail = await prisma.verifiedEmail.create({
        data: {
          userId: user.id,
          token,
        },
      });
    } catch (error) {
      return next(new ErrorResponse());
    }
    sendEmail(
      user.email,
      "Verify email",
      `<h3>Please Click Link Bottom to Verify youre Email</h3>
      <p>${url}<p>`
    );
  }

  // Finally Store Data User Register
  return res.status(200).json({ success: true, user });
};

// logout Controller
const logout = async (req, res, next) => {
  const refresh_token = req.cookies.refresh_token;

  // validate refresh_token
  if (!refresh_token)
    return next(new ErrorResponse("Youre Status Not Login", 401));

  // update refresh_token to null
  let user;
  try {
    user = await prisma.user.findFirst({
      where: {
        refreshToken: refresh_token,
      },
    });
  } catch (error) {
    return next(new ErrorResponse());
  }

  //  validate Token in cookies
  if (!user) return next(new ErrorResponse("Token Not Valid", 401));

  // Success Logout
  // 1. Clear Cookie
  res.clearCookie("refresh_token");

  // 2. Update Refresh_token Set Null
  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: null,
      },
    });
  } catch (error) {
    return next(new ErrorResponse(error.message, 501));
  }

  // 3. Response Status
  return res
    .status(200)
    .json({ success: true, message: "Logout Successfully" });
};

// verify email Controller
const verifyEmail = async (req, res, next) => {
  const { id, token } = req.params;

  // validate link email verified
  if (!id || !token) return next(ErrorResponse("Invalid link verified email"));

  // update status email is verified
  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        isVerified: true,
      },
    });
  } catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }

  // delete token email verified
  try {
    await prisma.verifiedEmail.delete({
      where: {
        userId: id,
      },
    });
  } catch (error) {
    return next(new ErrorResponse());
  }

  // Success Verified email and redirect to login Page
  return res.redirect("http://localhost:3000");
};

const session = async (req, res, next) => {
  const refreshToken = req.cookies.refresh_token;
  //cek cookies in headers request
  if (!refreshToken || refreshToken === undefined) {
    return res.status(401).json({ isLogin: false });
  }
  // validation token in database
  let user;
  try {
    user = prisma.user.findFirst({
      where: {
        refreshToken,
      },
    });
  } catch (error) {
    return next(new ErrorResponse());
  }
  if (!user) {
    res.status(401).json({ isLogin: false });
  }

  //Validation TOken
  jwt.verify(
    refreshToken,
    constant.JWT_SECRET_REFRESH_TOKEN,
    (err, decoded) => {
      if (err) {
        return next(new ErrorResponse("Token Not Valid", 401));
      }
      return res.status(200).json({ isLogin: true, decoded });
    }
  );
};

// get token Controller
const getToken = async (req, res, next) => {
  const refreshToken = req.cookies.refresh_token;
  //cek cookies in headers request
  if (!refreshToken || refreshToken === undefined) {
    return next(
      new ErrorResponse("Token Not Found Please Login To get Token", 401)
    );
  }
  // validation token in database
  let user;
  try {
    user = prisma.user.findFirst({
      where: {
        refreshToken,
      },
    });
  } catch (error) {
    return next(new ErrorResponse());
  }
  if (!user) {
    return next(new ErrorResponse("Token Not Found", 401));
  }

  //Send Access Token
  jwt.verify(
    refreshToken,
    constant.JWT_SECRET_REFRESH_TOKEN,
    (err, decoded) => {
      if (err) {
        return next(new ErrorResponse("Token Not Valid", 401));
      }
      const token = accessToken(decoded.id);
      return res.status(200).json({ success: true, token });
    }
  );
};

export { login, register, logout, verifyEmail, session, getToken };
