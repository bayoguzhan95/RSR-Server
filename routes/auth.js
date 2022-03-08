import express from "express";

const router = express.Router();
import { requireSignin } from "../middlewares";

// controllers
import {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  resetPassword,
} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user",  currentUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;