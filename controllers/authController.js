import bcrypt from "bcryptjs";
import prisma from "../utils/db.js";
import { errorHandler } from "../utils/errorMiddleware.js";

// Login Controller
const login = async (req, res, next) => {
  console.log("ini login route");
  const { email, password } = req.body;
  const newPassword = "password";
  const salt = await bcrypt.genSalt(10);
  const oldPassword = await bcrypt.hash(newPassword, salt);
  const hashPassword = await bcrypt.hash(password, salt);

  if (!email || !password) {
    next(errorHandler(401, "Password Not Match"));
  }

  if (oldPassword !== hashPassword) {
    next(errorHandler(401, "Password Not Match"));
  }

  return res
    .status(200)
    .json({ success: true, data: { ...req.body, oldPassword } });
};

// Register Controller
const register = async (req, res, next) => {
  const { username, email, password, password_confirmation } = req.body;

  if (!username || !email || !password || !password_confirmation) {
    next(errorHandler(400, "All Field Is Required"));
  }

  if (password !== password_confirmation) {
    next(errorHandler(401, "Password Not Macth"));
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      next(errorHandler(401, "Email Already Exist"));
    }
  } catch (error) {
    next(500, error.message);
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const data = {
    username,
    email,
    password: hashPassword,
    asd: "asd",
  };

  try {
    const storeData = await prisma.user.create({ data });
    return res.status(200).json({ success: true, data: storeData });
  } catch (error) {
    next(errorHandler(500, "Internal server error"));
  }
};

export { login, register };
