import express from "express";
import { registerValidation, loginValidation } from "../validations/authValidation.js";
import validateRequest from "../middleware/validateRequest.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  register,
  login,
  getProfile,
  changePassword,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerValidation, validateRequest, register);

router.post("/login", loginValidation, validateRequest, login);

router.get("/profile", authMiddleware, getProfile);

router.put("/change-password", authMiddleware, changePassword);

export default router;