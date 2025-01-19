import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button"; // Ensure you have the Button component from ShadCN UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"; // DropdownMenu from ShadCN UI
import { useTheme } from "./theme-provider"; // Use the theme context we created

export function ModeToggle() {
  const { setTheme } = useTheme(); // Get the setTheme function from context

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-gray-700 hover:bg-gray-700 dark:bg-white dark:text-black">
          <Sun className="lg:h-[1.2rem] lg:w-[1.2rem]" />
          <Moon className="absolute lg:h-[1.2rem] lg:w-[1.2rem] text-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}