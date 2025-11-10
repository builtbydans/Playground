"use client";

import React from "react";

const Grid = ({ data = [], columns = 3, gap = "1rem", children }) => {
  // Handle edge case: no data
  if (!data.length) {
    return <p style={{ opacity: 0.7 }}>No items to display.</p>;
  }

  // Inline grid layout for now
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap,
    marginTop: "2rem",
  };

  return <div style={gridStyle}>{data.map(children)}</div>;
};

export default Grid;
