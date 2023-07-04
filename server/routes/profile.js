import express from "express";
import profileController from "../controllers/profileController.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
const router = express.Router();

router.get("/profile",isLoggedIn, profileController);

export default router;
