import express from "express";
import {todoModel as Todo} from "../models/todo.js";

export const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json({ success: true, count: todos.length, data: todos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single todo by ID
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    res.json({ success: true, data: todo });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create a new todo
router.post("/", async (req, res) => {
  try {
    const { name, des } = req.body;
    const todo = await Todo.create({ name, des });
    res.status(201).json({ success: true, data: todo });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update a todo
router.put("/:id", async (req, res) => {
  try {
    const { name, des } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { name, des },
      { new: true, runValidators: true }
    );
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    res.json({ success: true, data: todo });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE a todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    res.json({ success: true, message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

