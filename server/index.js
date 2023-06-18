import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/user.js";
import { connectDB } from "./model/database.js";
import User from "./model/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home Page");
});

connectDB();

app.use("/api/v1/users", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
