import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";

const localStorageTasks = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith("tasks/")) {
    const state = store.getState();
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }

  return result;
};

export const store = configureStore({
  reducer: tasksReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageTasks),
});
