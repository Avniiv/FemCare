import mongoose from "mongoose";

const cycleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    periodStartDate: {
      type: Date,
      required: [true, "Period start date is required"],
    },
    symptoms: {
      type: [String],
      default: [],
    },
    notes: {
      type: String,
      trim: true,
      default: "",
      maxlength: [1000, "Notes cannot exceed 1000 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Cycle = mongoose.model("Cycle", cycleSchema);

export default Cycle;