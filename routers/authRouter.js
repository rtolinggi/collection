import express from "express";
import { login, logout, register } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.delete("/logout", logout);

export default authRoute;
