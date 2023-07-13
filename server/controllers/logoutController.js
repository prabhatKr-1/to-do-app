export default function logout(req, res) {
  const { token } = req.cookies;
  if (!token) {
    return res.json({ message: "User was not signed in!", success: true });
  }

  res
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: "none",
      secure: true,
    })
    .json({
      message: "Logged out successfully!",
      success: true,
    });
}
