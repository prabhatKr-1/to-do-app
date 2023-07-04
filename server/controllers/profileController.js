import jwt from "jsonwebtoken";
import Users from "../model/user.js";
export default async function profileController(req, res) {
  return res.json({
    name: req.user.name,
    email: req.user.email,
    success: true
  });
}
