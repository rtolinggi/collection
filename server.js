import "dotenv/config";
import express from "express";
import route from "./routers/authRouter.js";

const app = express();
const port = process.env.POR || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
// app.use(errorHandler);
app.use("/api/auth", route);

// error Handler middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something wrong error";
  return res.status(errorStatus).json({ success: false, msg: errorMessage });
});

app.listen(port, async () => {
  console.log(`Server is Running at Port : ${port}`);
});
