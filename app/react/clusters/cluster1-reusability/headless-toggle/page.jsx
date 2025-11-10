"use client";

import ModalToggle from "./components/ModalToggle";
import ThemeToggle from "./components/ThemeToggle";
import React from "react";

const ToggleContext = React.createContext();

export default function Page({ children }) {
  const [isOn, setIsOn] = React.useState(false);
  const toggle = React.useCallback(() => setIsOn((prev) => !prev), []);

  return (
    <ToggleContext.Provider value={{ isOn, toggle }}>
      <main style={{ padding: "2rem" }}>
        <h1>Cluster 1 – Headless Toggle</h1>
        <p>Testing reusable hooks & context patterns.</p>
        <h3>Theme Toggle</h3>
        <ThemeToggle />
        <div style={{ height: "5px", backgroundColor: "blue" }}></div>
        <h3>Modal Toggle</h3>
        <ModalToggle />
      </main>
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
