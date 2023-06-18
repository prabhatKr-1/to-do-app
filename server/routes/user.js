import express from "express";
import login from "./login.js";
import logout from "./logout.js";
import profile from "./profile.js";
const router = express.Router();

router.use("/",login)
router.use("/", logout);
router.use("/", profile);

export default router;
