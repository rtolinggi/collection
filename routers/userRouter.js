import express from "express";
import {
  getUser,
  storeUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.route("/").get(getUser).post(storeUser);
userRoute.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

export default userRoute;
