"use client";

import React from "react";
import useToggle from "../hooks/useToggle";

const ThemeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(true);

  return (
    <div
      onClick={toggleDarkMode}
      style={
        isDarkMode
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "gray" }
      }
    >
      <p>ThemeToggle - Theme is {isDarkMode ? "dark" : "light"}</p>
    </div>
  );
};

export default ThemeToggle;
