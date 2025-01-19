import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, toggleTaskStatus } from "./redux/taskSlice";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleTaskDrop = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-950 flex font-[Inter] text-[#1E293B]">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-8">
        <Header username={"Krish"} />
        <Routes>
          {/* Task List Route */}
          <Route
            path="/tasks"
            element={<TaskList tasks={tasks} handleTaskDrop={handleTaskDrop} />}
          />

          {/* Task Details Route */}
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
