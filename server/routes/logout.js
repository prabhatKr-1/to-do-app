import express from "express";

const router = express.Router();

router.get("/logout", (req, res) => {
  res.send("Logout Page");
});
export default router;
