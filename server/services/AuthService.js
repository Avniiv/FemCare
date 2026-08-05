import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

  const { password: _, ...userWithoutPassword } = newUser.toObject();

  return userWithoutPassword;
};

const loginUser = async (loginData) => {
   const { email, password } = loginData;
 
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

   const token = jwt.sign({ id : user._id, email : user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

   return {
    token,
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImage: user.profileImage,
      isProfileComplete: user.isProfileComplete,
      preferredLanguage: user.preferredLanguage,
      notificationsEnabled: user.notificationsEnabled,
      theme: user.theme,
    },
  };
};

const getUserProfile = async (userId) => {
   const user = await User.findById(userId);
 
  if (!user) {
    throw new Error("User not found");
  }
 
  return user;
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