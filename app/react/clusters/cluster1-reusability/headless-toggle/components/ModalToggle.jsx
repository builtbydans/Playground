"use client";

import React from "react";
import { ToggleContext } from "../page";

const ModalToggle = () => {
  const { isOn, toggle } = React.useContext(ToggleContext);
  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <div
        style={{
          height: "350px",
          width: "30%",
          backgroundColor: "red",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "space-around",
          justifyContent: "center",
        }}
      >
        <button onClick={toggle}>{isOn ? "Close" : "Open"} Modal</button>
      </div>
      {isOn && (
        <div
          style={{
            height: "350px",
            width: "30%",
            backgroundColor: "blue",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-around",
            justifyContent: "center",
          }}
        >
          <p>I am an opened modal</p>
        </div>
      )}
    </div>
  );
};

export default ModalToggle;
