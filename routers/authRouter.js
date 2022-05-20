import express from "express";
import {
  getToken,
  login,
  logout,
  register,
  session,
  verifyEmail,
} from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.delete("/logout", protect, logout);
authRoute.get("/:id/verify/:token", verifyEmail);
authRoute.get("/login", session);
authRoute.get("/token", protect, getToken);

export default authRoute;
