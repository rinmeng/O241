"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

// Theme Toggle Button component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="button"
      className="p-2 outline rounded-xl flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-4 py-4 px-10 bg-background border-b border-border">
      <div className="text-4xl font-semibold">o241</div>
      <ThemeToggle />
    </div>
  );
}
