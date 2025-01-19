import { useState } from "react";
import { ModeToggle } from "./ModeToggle";

const Header = ({ username }) => {
  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";
  return (
    <header className="lg:text-2xl ml-2 font-semibold p-4 dark:text-gray-400 flex justify-between items-center pl-8">
      Welcome, {username}! {greeting}
      <ModeToggle />
    </header>
  );
};

export default Header;
