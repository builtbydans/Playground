"use client";

import React from "react";
import {
  counter,
  makeGreeter,
  createCounter,
  makeMultiplier,
  makeRateLimiter,
  makeRateLimiter2,
} from "./closures";

const Closures = () => {
  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    // const add = counter();
    // add(); // 1
    // add(); // 2

    // const greetDan = makeGreeter("Dan");
    // greetDan(); // "Hello Dan"

    // const counter = createCounter();
    // counter.increment();
    // counter.increment();
    // console.log(counter.get()); // 2

    const double = makeMultiplier(2);
    const triple = makeMultiplier(3);

    console.log(double(5)); // 10
    console.log(triple(5)); // 15

    const apiCall = makeRateLimiter(3);
    // run first immediately
    setResult((prev) => [...prev, apiCall()]);

    // run the next ones at intervals
    setTimeout(() => setResult((prev) => [...prev, apiCall()]), 1000);
    setTimeout(() => setResult((prev) => [...prev, apiCall()]), 2000);
    setTimeout(() => setResult((prev) => [...prev, apiCall()]), 3000);
  }, []);
  return (
    <>
      <h1>Closures</h1>
      <p>Check console log</p>
      {result.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </>
  );
};

export default Closures;
