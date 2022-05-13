import jwt from "jsonwebtoken";
import "dotenv/config";

//Generate access Token
const accessToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "60s",
  });
};

//Generate Refresh Token
const refreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

export { accessToken, refreshToken };
