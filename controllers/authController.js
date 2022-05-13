import prisma from "../utils/db.js";
import ErrorResponse from "../utils/errorRespons.js";
import { Bcrypt, hashPassword } from "../utils/password.js";
import { accessToken, refreshToken } from "../utils/token.js";

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
  if (user && !(await Bcrypt.compare(password, user.password))) {
    return next(new ErrorResponse("Invalid Credential", 401));
  }

  // validate isVerified User
  const isVerifiedEmail = JSON.parse(process.env.EMAIL_VERIFIED_LOGIN);
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

  // Store Data Table User
  const data = {
    username,
    email,
    password: await hashPassword(password),
  };

  try {
    const user = await prisma.user.create({ data });
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return next(new ErrorResponse(error?.message));
  }
};

// logout
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
  res.clearCookie(refresh_token);

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

export { login, register, logout };
