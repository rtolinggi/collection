import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import jsonwebtoken from "jsonwebtoken";

const prisma = new PrismaClient();

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  const newPassword = "password";
  const salt = await bcrypt.genSalt(10);
  const oldPassword = await bcrypt.hash(newPassword, salt);
  const hashPassword = await bcrypt.hash(password, salt);

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, msg: "All Field Is Required" });
  }

  if (oldPassword !== hashPassword) {
    return res.status(400).json({ success: false, msg: "Invalid Credential" });
  }

  return res
    .status(200)
    .json({ success: true, data: { ...req.body, oldPassword } });
};

// Register Controller

const register = async (req, res) => {
  const { username, email, password, password_confirmation } = req.body;

  if (!username || !email || !password || !password_confirmation) {
    return res
      .status(400)
      .json({ success: false, msg: "All Field Is Required" });
  }

  if (password !== password_confirmation) {
    return res.status(400).json({ success: false, msg: "Password Not Match" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return res.status(400).json({ success: false, msg: "Email Already Exist" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const data = {
    username,
    email,
    password: hashPassword,
  };

  const storeData = await prisma.user.create({ data });
  console.log(storeData);

  if (!storeData) {
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }

  return res.status(200).json({ success: true, data });
};

export { login, register };
