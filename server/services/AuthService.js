import bcrypt from "bcryptjs";
import User from "../models/User.js";

const registerUser = async (userData) => {
  const { fullName, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("A user with this email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const createdUser = await User.findById(newUser._id);

  return createdUser;
};

const loginUser = async (loginData) => {
  throw new Error("Not implemented");
};

const getUserProfile = async (userId) => {
  throw new Error("Not implemented");
};

const changePassword = async (userId, passwordData) => {
  throw new Error("Not implemented");
};

export default {
  registerUser,
  loginUser,
  getUserProfile,
  changePassword,
};