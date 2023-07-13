import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { connectDB } from "./model/database.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: [process.env.DOMAIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home Page");
});

connectDB();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/tasks", taskRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
