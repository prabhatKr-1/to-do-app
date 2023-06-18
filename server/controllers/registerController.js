import bcrypt from "bcrypt";
import Users from "../model/user.js";

export function registerController(req, res) {
  const { name, email, password, passwordVerify } = req.body;

  if (password !== passwordVerify) {
    return res.json({
      message: "Passwords do not match!",
      success: false,
    });
  }

  const user = Users.findOne({ email: email });

  if (user) {
    return res.json({
      message: "Email already exists!",
      success: false,
    });
  }
  Users.create({
    name,
    email,
    password: bcrypt.hash(password, 10),
  });
  return res.render(back);
}
