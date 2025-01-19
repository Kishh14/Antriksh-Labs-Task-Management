import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Hamburger icon for small screens */}
      <div className={`md:hidden p-4 absolute top-[1.7rem] left-1 z-50`}>
        <button className="text-lg dark:text-white" onClick={toggleSidebar}>
          {isSidebarVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <Card
        className={`${
          isSidebarVisible ? "w-64 left-0 z-20" : "-left-44"
        } bg-white rounded-none transition-all h-screen absolute lg:static lg:block shadow-md dark:bg-gray-950 dark:text-white`}
      >
        {/* Sidebar Header */}
        <div className="py-8 border-b border-gray-300 dark:border-gray-600 relative">
          <h2 className="lg:text-xl mt-2 font-bold text-center dark:text-gray-200">
            Antriksh Labs
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 space-y-5 px-4">
          <Link>
            <Button
              variant="ghost"
              className="w-full justify-start mb-3 dark:text-gray-200 dark:hover:text-black text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <AiOutlineHome className="mr-2 text-xl ml-1" /> Dashboard
            </Button>
          </Link>
          <Link to="/tasks">
            <Button
              variant="ghost"
              className="w-full justify-start mb-3 dark:text-gray-200 dark:hover:text-black text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <FaTasks className="mr-2 text-xl ml-1" /> Tasks
            </Button>
          </Link>
          <Link>
            <Button
              variant="ghost"
              className="w-full justify-start mb-3 dark:text-gray-200 dark:hover:text-black text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <CgProfile className="mr-2 text-xl ml-1" /> Profile
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default Sidebar;
