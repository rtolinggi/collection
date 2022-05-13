import express from "express";
import {
  login,
  logout,
  register,
  verifyEmail,
} from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.delete("/logout", logout);
authRoute.get("/:id/verify/:token", verifyEmail);

export default authRoute;
