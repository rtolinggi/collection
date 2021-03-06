import jwt from "jsonwebtoken";
import prisma from "../utils/db.js";
import ErrorResponse from "../utils/errorRespons.js";
import constant from "../constants/index.js";

const protect = async (req, res, next) => {
  let token;
  const reqHeader = req.headers.authorization;
  if (reqHeader && reqHeader.startsWith("Bearer")) {
    //Get Token From Header
    token = reqHeader.split(" ")[1];
    //Verify Token
    const id = jwt.verify(
      token,
      constant.JWT_SECRET_ACCESS_TOKEN,
      (err, decoded) => {
        if (err) {
          return next(new ErrorResponse("Token Not Valid", 401));
        }
        return decoded.id;
      }
    );
    //Get User From the Token
    try {
      req.user = await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          username: true,
          email: true,
          refreshToken: true,
        },
      });
    } catch (error) {
      return next(new ErrorResponse());
    }
    next();
  }
  if (!token) {
    return next(
      new ErrorResponse("Authorization Please Send Yore Token Access", 401)
    );
  }
};

export default protect;
