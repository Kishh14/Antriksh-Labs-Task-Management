import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "@/redux/taskSlice";

const TaskDetails = () => {
  const { id } = useParams(); // Get the dynamic task ID from the URL
  const { tasks } = useSelector((state) => state.tasks);
  const task = tasks.find((t) => t.id.toString() === id); // Find the task by ID
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!task) {
    return <div className="p-8">Task not found!</div>;
  }

  // Handle task deletion
  const handleDelete = () => {
    const confirmation = confirm("Do you really want to delete?");
    if (confirmation) {
      dispatch(deleteTask(task.id));
      navigate("/tasks");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl dark:text-gray-500 font-bold mb-4">
        Task Details
      </h1>
      <div className="bg-white dark:bg-black shadow-md rounded-lg p-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl dark:text-gray-200 font-semibold mb-2">
            {task.title}
          </h2>
          <span
            className={`inline-block px-4 py-2 text-sm font-bold rounded-full ${
              task.status === "In Progress"
                ? "bg-blue-100 text-blue-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {task.status}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-400">{task.description}</p>

        <div className="flex justify-between mt-3">
          <Link
            to="/tasks"
            className="mt-6 block text-blue-500 hover:underline text-sm"
          >
            Back to Tasks
          </Link>
          <button
            onClick={handleDelete}
            className="mt-6 block text-red-500 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
