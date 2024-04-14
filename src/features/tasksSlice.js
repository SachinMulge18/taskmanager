import { createSlice } from "@reduxjs/toolkit";

const loadTasks = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading tasks from local storage:", err);
    return [];
  }
};

const saveTasks = (tasks) => {
  try {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    console.error("Error saving tasks to local storage:", err);
  }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadTasks(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Math.random().toString(36).substr(2, 9),
        text: action.payload,
        completed: false,
      });
      saveTasks(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasks(state.tasks);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasks(state.tasks);
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
