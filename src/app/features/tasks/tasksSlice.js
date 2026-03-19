import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    filter: "all",
    searchQuery: "",
    sortBy: "date",
  },
  reducers: {
    addTask: () => {
      console.log("Task Added!");
    },
    deleteTask: () => {
      console.log("Task Deleted!");
    },
    toggleTask: () => {
      console.log("Task Status Changed!");
    },
    updateTask: () => {
      console.log("Task Updated!");
    },
    setFilter: () => {
      console.log("Task Filtered!");
    },
    setSearchQuery: () => {
      console.log("Search!");
    },
    setSortBy: () => {
      console.log("Task Sorted!");
    },
    reorderTasks: () => {
      console.log("Task Reordered!");
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
  setFilter,
  setSearchQuery,
  setSortBy,
  reorderTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
