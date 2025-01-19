import React from "react";
import { useDrop } from "react-dnd";

const DropArea = ({ onTaskDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "TASK", // Accepts items of type 'TASK'
    drop: (item) => onTaskDrop(item.id), // Call the onTaskDrop handler with the task ID
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`lg:w-64 max-md:h-36 mt-4 lg:mt-0 text-center border-2 border-dashed rounded-lg flex items-center justify-center ${
        isOver
          ? "bg-green-100 border-green-600"
          : "bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 border-gray-400"
      }`}
    >
      {isOver
        ? "Release to Mark as Completed"
        : "Drag Tasks Here to Complete"}
    </div>
  );
};

export default DropArea;
