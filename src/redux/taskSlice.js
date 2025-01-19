import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch tasks from the mock API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("https://antriksh-labs-task-management-api.onrender.com/tasks");
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return await response.json();
});

// Add task to the mock API
export const addTask = createAsyncThunk("tasks/addTask", async (newTask) => {
  const response = await fetch("https://antriksh-labs-task-management-api.onrender.com/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
  return await response.json(); // Return the added task
});

// Delete task from the mock API
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    const response = await fetch(`https://antriksh-labs-task-management-api.onrender.com/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    return taskId; // Return the task ID for removal from state
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    toggleTaskStatus(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status =
          task.status === "In Progress" ? "Completed" : "In Progress";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch tasks
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Add task
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload); // Add the new task to the state
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Delete task
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { toggleTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
