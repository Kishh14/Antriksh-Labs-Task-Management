import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, deleteTask } from "../redux/taskSlice";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const DraggableTask = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const dispatch = useDispatch();

  // Handle status toggle with confirmation
  const handleStatusToggle = () => {
    const confirmation = window.confirm(
      `Are you sure you want to mark this task as ${
        task.status === "In Progress" ? "Completed" : "In Progress"
      }?`
    );
    if (confirmation) {
      dispatch(toggleTaskStatus(task.id));
    }
  };

  // Handle task deletion
  const handleDelete = () => {
    const confirmation = confirm("Do you really want to delete?");
    if (confirmation) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <Card
      ref={drag}
      className={`p-4 relative h-36 lg:h-44 shadow-md ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {/* Task Content */}
      <div className="flex justify-between">
        {/* Taks ID */}
        <div className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">
          Task ID: {task.id}
        </div>
      </div>
      {/* Task Title */}
      <Link to={`/tasks/${task.id}`}>
        <h3 className="text-sm lg:text-lg my-1 font-semibold text-gray-800 dark:text-gray-200">
          {task.title}
        </h3>
      </Link>

      {/* Task Paragraph */}
      <Link to={`/tasks/${task.id}`}>
        <p
          className={`text-xs lg:text-sm text-gray-600 dark:text-gray-400 ${
            task.description.length > 60 ? "truncate" : ""
          }`}
          title={task.description}
        >
          {task.description.length > 60
            ? `${task.description.slice(0, 60)}...`
            : task.description}
        </p>
      </Link>

      <div className="mt-5 flex justify-between items-center absolute bottom-3 lg:gap-9">
        {/* Status Badge */}
        <Badge
          variant={task.status === "In Progress" ? "outline" : "success"}
          className={`text-xs px-3 py-1 mr-6 lg:mr-0 ${
            task.status === "In Progress" ? "text-blue-600" : "text-green-600"
          }`}
        >
          {task.status}
        </Badge>

        {/* Toggle Status Switch */}
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-600">
            {task.status === "In Progress" ? "In Progress" : "Completed"}
          </span>
          <Switch
            checked={task.status === "Completed"}
            onCheckedChange={handleStatusToggle}
          />
        </div>
      </div>
    </Card>
  );
};

export default DraggableTask;
