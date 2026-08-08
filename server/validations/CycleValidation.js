import { body } from "express-validator";

export const createCycleValidation = [
  body("periodStartDate")
    .notEmpty()
    .withMessage("Period start date is required")
    .isISO8601()
    .withMessage("Please provide a valid period start date"),

  body("symptoms")
    .optional()
    .isArray()
    .withMessage("Symptoms must be an array"),

  body("symptoms.*")
    .isString()
    .withMessage("Each symptom must be a string")
    .trim(),

  body("notes")
    .optional()
    .isString()
    .withMessage("Notes must be a string")
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Notes cannot exceed 1000 characters"),
];

export const updateCycleValidation = [
  body("periodStartDate")
    .optional()
    .isISO8601()
    .withMessage("Please provide a valid period start date"),

  body("symptoms")
    .optional()
    .isArray()
    .withMessage("Symptoms must be an array"),

  body("symptoms.*")
    .isString()
    .withMessage("Each symptom must be a string")
    .trim(),

  body("notes")
    .optional()
    .isString()
    .withMessage("Notes must be a string")
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Notes cannot exceed 1000 characters"),
];