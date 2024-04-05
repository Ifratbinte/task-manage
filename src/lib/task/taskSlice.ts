"use client";

import { Task } from "@/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface TasksState {
  tasks: Task[];
  filter: string;
}

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
};

const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      toast.success("Task create successfully!");
    },
    toggleTaskCompletion: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId)
      if(task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      toast.success("Task remove successfully!");
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const idx = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      console.log({ idx });

      if (idx !== -1) {
        state.tasks[idx].title = action.payload.title;
        state.tasks[idx].description = action.payload.description;
        state.tasks[idx].dueDate = action.payload.dueDate;
      }
      toast.success("Task updated successfully!");
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskCompletion, deleteTask, updateTask, setFilter } =
  TaskSlice.actions;
export default TaskSlice.reducer;
