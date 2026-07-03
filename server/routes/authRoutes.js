import express from "express";
import { registerValidation, loginValidation } from "../validations/authValidation.js";
import validateRequest from "../middleware/validateRequest.js";
import {
  register,
  login,
  getProfile,
  changePassword,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerValidation, validateRequest, register);

router.post("/login", loginValidation, validateRequest, login);

// TODO: Add authMiddleware once implemented, to protect this route
router.get("/profile", getProfile);

// TODO: Add authMiddleware once implemented, to protect this route
router.put("/change-password", changePassword);

export default router;