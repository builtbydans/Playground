/*
Challenge 6 – State & Events
You have a broken component. Fix it so that the counter updates when clicked.
*/

"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
