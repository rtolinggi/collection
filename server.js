import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import errorHandler from "./middlewares/errorMiddleware.js";
import authRoute from "./routers/authRouter.js";
import userRoute from "./routers/userRouter.js";
import cors from "cors";
import protect from "./middlewares/authMiddleware.js";

const whiteList = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

const app = express();
const port = process.env.POR || 5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route
app.use("/api/auth", authRoute);
app.use("/api/user", protect, userRoute);

// error Handler middleware
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server is Running at Port : ${port}`);
});
