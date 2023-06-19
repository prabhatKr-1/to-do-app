import jwt from "jsonwebtoken";
import Users from "../model/user.js";
export default async function profileController(req, res) {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      message: "Login First",
      success: false,
    });
  }
  const cookie = jwt.verify(token, process.env.JWT_KEY);
  const user = await Users.findOne({ _id: cookie });
  return res.json({
    name: user.name,
    email: user.email,
  });
}
