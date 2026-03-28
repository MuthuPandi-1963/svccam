import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {router as todoRoutes} from "./controllers/todo.controller.js"; // IMPORTANT: add .js extension
import { dbConfig } from "./dbConfig.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Todo API is running 🚀" });
});


    app.listen(PORT, () => {
        dbConfig()
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    })