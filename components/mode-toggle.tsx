"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      id="step-6"
      variant="ghost"
      onClick={toggleTheme}
      className="w-full justify-start cursor-pointer px-3 py-2 text-white hover:bg-custom-purple-light"
    >
      <span className="mr-3">
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </span>
      {theme === "light" ? "Dark Theme" : "Light Theme"}
    </Button>
  );
}
