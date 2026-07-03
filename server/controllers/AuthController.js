import AuthService from "../services/AuthService.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const register = async (req, res) => {
  try {
    const result = await AuthService.registerUser(req.body);
    return successResponse(res, 201, "User registered successfully", result);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const result = await AuthService.loginUser(req.body);
    return successResponse(res, 200, "User logged in successfully", result);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getProfile = async (req, res) => {
  try {
    const result = await AuthService.getUserProfile(req.user);
    return successResponse(res, 200, "User profile fetched successfully", result);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const result = await AuthService.changePassword(req.user, req.body);
    return successResponse(res, 200, "Password changed successfully", result);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};