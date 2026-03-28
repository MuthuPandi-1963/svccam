import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Task name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    des: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
      default: "",
    },
  },
  { timestamps: true }
);

export const todoModel = mongoose.model("Todo", todoSchema);