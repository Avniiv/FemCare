import express from "express";
import cors from "cors";

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

export default app;