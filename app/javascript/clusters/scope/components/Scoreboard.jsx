"use client";

import React from "react";

export default function Scoreboard() {
  const [score, setScore] = React.useState(0);
  var player = "Dan";

  React.useEffect(() => {
    console.log("Score updated:", score);
  }, [score]);

  function increase() {
    console.log(`${player}'s score before:`, score);
    setScore(score + 1);
    console.log(`${player}'s score after:`, score);
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🏆 Scoreboard</h1>
      <p>
        {player}s score: {score}
      </p>
      <button onClick={increase}>Increase</button>
    </main>
  );
}
