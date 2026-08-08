import CycleService from "../services/CycleService.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const createCycle = async (req, res) => {
  try {
    const cycle = await CycleService.createCycle(req.user.id, req.body);
    return successResponse(res, 201, "Cycle created successfully", cycle);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getCycles = async (req, res) => {
  try {
    const cycles = await CycleService.getUserCycles(req.user.id);
    return successResponse(res, 200, "Cycles fetched successfully", cycles);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const getCycle = async (req, res) => {
  try {
    const cycle = await CycleService.getCycleById(req.user.id, req.params.id);
    return successResponse(res, 200, "Cycle fetched successfully", cycle);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const updateCycle = async (req, res) => {
  try {
    const cycle = await CycleService.updateCycle(
      req.user.id,
      req.params.id,
      req.body
    );
    return successResponse(res, 200, "Cycle updated successfully", cycle);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

export const deleteCycle = async (req, res) => {
  try {
    const result = await CycleService.deleteCycle(req.user.id, req.params.id);
    return successResponse(res, 200, "Cycle deleted successfully", result);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};