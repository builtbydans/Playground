"use client";

import React, { createContext, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeContext = createContext();

export default function Page() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main
        className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-semibold mb-6">Dark Mode Toggle</h1>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          {theme === "dark" ? (
            <>
              <Sun size={20} /> <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon size={20} /> <span>Dark Mode</span>
            </>
          )}
        </button>

        <p className="mt-6 text-sm opacity-80">
          Current theme: {theme === "dark" ? "Dark" : "Light"}
        </p>
      </main>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
