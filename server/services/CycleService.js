import Cycle from "../models/Cycle.js";

const createCycle = async (userId, cycleData) => {
  const { periodStartDate, symptoms, notes } = cycleData;

  const newCycle = await Cycle.create({
    userId,
    periodStartDate,
    symptoms,
    notes,
  });

  return newCycle;
};

const getUserCycles = async (userId) => {
  const cycles = await Cycle.find({ userId }).sort({ periodStartDate: -1 });

  return cycles;
};

const getCycleById = async (userId, cycleId) => {
  const cycle = await Cycle.findOne({ _id: cycleId, userId });

  if (!cycle) {
    throw new Error("Cycle not found");
  }

  return cycle;
};

const updateCycle = async (userId, cycleId, cycleData) => {
  const { periodStartDate, symptoms, notes } = cycleData;

  const cycle = await Cycle.findOne({ _id: cycleId, userId });

  if (!cycle) {
    throw new Error("Cycle not found");
  }

  if (periodStartDate !== undefined) cycle.periodStartDate = periodStartDate;
  if (symptoms !== undefined) cycle.symptoms = symptoms;
  if (notes !== undefined) cycle.notes = notes;

  const updatedCycle = await cycle.save();

  return updatedCycle;
};

const deleteCycle = async (userId, cycleId) => {
  const cycle = await Cycle.findOne({ _id: cycleId, userId });

  if (!cycle) {
    throw new Error("Cycle not found");
  }

  await cycle.deleteOne();

  return { deleted: true };
};

export default {
  createCycle,
  getUserCycles,
  getCycleById,
  updateCycle,
  deleteCycle,
};