import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadTasks = () => {
  try {
    const localTasks = localStorage.getItem("tasks");

    return localTasks
      ? {
          tasks: JSON.parse(localTasks),
          filter: "all",
          searchQuery: "",
          sortBy: "date",
        }
      : { tasks: [], filter: "all", searchQuery: "", sortBy: "date" };
  } catch (error) {
    console.log(error);
    return { tasks: [], filter: "all", searchQuery: "", sortBy: "date" };
  }
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { ...loadTasks() },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
        category: action.payload.category,
        isDone: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        dueDate: action.payload.dueDate,
      };
      state.tasks.unshift(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.isDone = !task.isDone;
      }
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);

      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.priority = action.payload.priority;
        task.category = action.payload.category;
        task.updatedAt = new Date().toISOString();
        task.dueDate = action.payload.dueDate;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
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
