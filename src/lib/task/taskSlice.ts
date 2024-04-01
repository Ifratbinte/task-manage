"use client";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  data: [],
};

const TaskSlice = createSlice({
  name: "Task",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      toast.success("Task added successfully!");
    },
   
  },
});

export const { addTask } =
  TaskSlice.actions;
export default TaskSlice.reducer;
