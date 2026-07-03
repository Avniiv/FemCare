import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route (temporary, to verify the server is running)
app.get("/", (req, res) => {
  res.status(200).json({ 
    success: true,
    message: "FemCare API is running" });
});

app.use("/api/auth", authRoutes);

export default app;