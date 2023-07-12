import Users from "../model/user.js";
import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.json({
      success: false,
      message: "User Not Logged In",
    });

  const cookie = jwt.verify(token, process.env.JWT_KEY);
  const user = await Users.findOne({ _id: cookie });
  req.user = user;
  next();
};
