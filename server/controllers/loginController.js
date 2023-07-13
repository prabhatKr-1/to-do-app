import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../model/user.js";

export async function loginController(req, res) {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (!user) {
    return res.json({
      message: "User doesn't exist!",
      success: false,
    });
  }
  // the first argument should be plain text password, the second should be the encrypted one
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({
      message: "Invalid Password",
      success: false,
    });
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);

  res
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 60 * 1000,
      sameSite: "none",
      secure: true,
    })
    .json({
      message: "Login Successful",
      success: true,
    });
}
