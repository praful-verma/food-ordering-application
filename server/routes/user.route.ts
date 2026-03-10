import express from "express";
import {
  checkAuth,
  signup,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticate } from "../middlewares/isAuthenticate.js";

const router = express.Router();

// auth
router.get("/check-auth", isAuthenticate, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", isAuthenticate, logout);

// email
router.post("/verify-email", verifyEmail);

// password
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

// profile
router.put("/profile", isAuthenticate, updateProfile);

export default router;
