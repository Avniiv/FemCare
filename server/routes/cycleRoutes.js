import express from "express";
import {
  createCycleValidation,
  updateCycleValidation,
} from "../validations/cycleValidation.js";
import validateRequest from "../middleware/validateRequest.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createCycle,
  getCycles,
  getCycle,
  updateCycle,
  deleteCycle,
} from "../controllers/CycleController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  createCycleValidation,
  validateRequest,
  createCycle
);

router.get("/", authMiddleware, getCycles);

router.get("/:id", authMiddleware, getCycle);

router.put(
  "/:id",
  authMiddleware,
  updateCycleValidation,
  validateRequest,
  updateCycle
);

router.delete("/:id", authMiddleware, deleteCycle);

export default router;