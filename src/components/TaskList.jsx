import React, { useState } from "react";
import DraggableTask from "./DraggableTask";
import DropArea from "./DropArea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

function TaskList({ tasks, handleTaskDrop }) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "In Progress",
  });

  const handleSubmit = async (e) => {
    if (!newTask.title.trim() || !newTask.description.trim()) return;

    try {
      await dispatch(addTask(newTask)).unwrap();
      alert("Task added successfully!");
    } catch (error) {
      console.error("Failed to add task: " + error.message);
    }
  };

  return (
    <div className="lg:flex">
      {/* Task List Section */}
      <div className="flex lg:px-8 lg:h-full">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="lg:text-lg font-bold dark:text-gray-200">
              My Tasks
            </h2>

            {/* Add New Task Dropdown */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="sm"
                  className="flex items-center space-x-2 text-xl dark:bg-gray-300"
                >
                  <span>+</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4 w-72">
                <h3 className="text-sm font-semibold mb-3">Add New Task</h3>
                <Input
                  placeholder="Title"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="mb-2"
                />
                <Textarea
                  placeholder="Description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="mb-4"
                />
                <div className="flex justify-end space-x-2">
                  <Button
                    size="sm"
                    className="block mx-auto w-full"
                    onClick={handleSubmit}
                  >
                    Add Task
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Separator className="mb-4" />

          {/* Task Listing
          <div className="grid h-[480px] overflow-auto scrollbar-hidden lg:h-[580px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <DraggableTask key={task.id} task={task} />
            ))}
          </div> */}
          {/* Loader or Task Listing */}
          {tasks.length === 0 ? (
            <div className="flex justify-center items-center h-[480px] lg:h-[580px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid h-[480px] overflow-auto scrollbar-hidden lg:h-[580px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <DraggableTask key={task.id} task={task} />
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Drop Area */}
      <DropArea onTaskDrop={handleTaskDrop} />
    </div>
  );
}

export default TaskList;
