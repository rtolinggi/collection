import jwt from "jsonwebtoken";
import constant from "../constants/index.js";
import "dotenv/config";

//Generate access Token
const accessToken = (id) => {
  return jwt.sign({ id }, constant.JWT_SECRET_ACCESS_TOKEN, {
    expiresIn: 10 * 60,
  });
};

//Generate Refresh Token
const refreshToken = (id) => {
  return jwt.sign({ id }, constant.JWT_SECRET_REFRESH_TOKEN, {
    expiresIn: "30d",
  });
};

export { accessToken, refreshToken };
