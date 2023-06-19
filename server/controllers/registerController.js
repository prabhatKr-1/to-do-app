import bcrypt from "bcrypt";
import Users from "../model/user.js";

export async function registerController(req, res) {
  const { name, email, password, verifyPassword } = req.body;

  if (password !== verifyPassword) {
    return res.json({
      message: "Passwords do not match!",
      success: false,
    });
  }

  const user = await Users.findOne({ email: email });
  console.log(user);
  if (user) {
    return res.json({
      message: "Email already exists!",
      success: false,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await Users.create({
    name,
    email,
    password: hashedPassword,
  });
  return res.json({
    message: "User created successfully",
    success: true,
  });
}
