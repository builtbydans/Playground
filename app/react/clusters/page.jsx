"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function Cluster1Page() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main
        className={`transition-colors ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <ThemeToggleButton />
        <h1>Cluster 1 – Reusability & Context</h1>
        <p>Mini projects exploring reusable logic and state sharing.</p>
        <ul>
          <li>
            <a href="/react/clusters/cluster1-reusability/headless-toggle">
              🧩 Project 1: Headless Toggle
            </a>
          </li>
          <li>
            <a href="/react/clusters/cluster1-reusability/reusable-card">
              💡 Project 2: Reusable Card/Grid Component
            </a>
          </li>
          <li>
            <a href="/react/clusters/cluster1-reusability/local-storage-theme">
              🌙 Project 3: LocalStorage Theme Context
            </a>
          </li>
        </ul>
      </main>
    </ThemeContext.Provider>
  );
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // shows sun/moon + toggles theme
}

export { ThemeContext };
