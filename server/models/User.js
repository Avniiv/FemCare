import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [50, "Full name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      select: false, // Exclude password from query results by default
    },
    profileImage: {
      type: String,
      default: "",
    },
    isProfileComplete: {
      type: Boolean,
      default: false,
    },
     dateOfBirth: {
      type: Date,
      default: null,
    },
     preferredLanguage: {
      type: String,
      default: "English",
    },
    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
    notificationsEnabled: {
      type: Boolean,
      default: true,
    },
    timezone: {
      type: String,
      default: "Asia/Kolkata",
    },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

const User = mongoose.model("User", userSchema, "users");

export default User;