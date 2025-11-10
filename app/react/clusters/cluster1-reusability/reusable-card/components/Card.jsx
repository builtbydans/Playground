"use client";

import React from "react";

const Card = ({ children }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    transition: "transform 0.2s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-4px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {children}
    </div>
  );
};

export default Card;
