import "dotenv/config";
import express from "express";
import route from "./routers/authRouter.js";

const app = express();
const port = process.env.POR || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", route);

app.listen(port, async () => {
  console.log(`Server is Running at Port : ${port}`);
});
