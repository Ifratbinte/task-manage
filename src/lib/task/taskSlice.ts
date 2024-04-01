"use client";

import { Task } from "@/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId)
      if(task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTaskCompletion, deleteTask } =
  TaskSlice.actions;
export default TaskSlice.reducer;
