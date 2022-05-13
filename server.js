import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import errorHandler from "./middlewares/errorMiddleware.js";
import authRoute from "./routers/authRouter.js";
import userRoute from "./routers/userRouter.js";

const app = express();
const port = process.env.POR || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Route
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// error Handler middleware
app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server is Running at Port : ${port}`);
});
