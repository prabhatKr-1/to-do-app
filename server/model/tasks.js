import express from "express";
import mongoose from "mongoose";

const schema = mongoose.Schema({
  taskName: {
    type: String,
    unique: true,
    required: true,
  },
  task: {
    type: String,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Tasks = mongoose.model("Task", schema);
export default Tasks;
