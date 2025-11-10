// lib/closures.js

export function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

export function makeGreeter(name) {
  return function () {
    console.log("Hello " + name);
  };
}

export function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }
  function get() {
    return count;
  }
  return {
    increment,
    get,
  };
}

export const makeMultiplier = (num) => {
  return function (value) {
    return value * num;
  };
};

export function makeRateLimiter(limit) {
  let calls = 0;
  return () => {
    if (calls < limit) {
      calls++;
      return "Allowed";
    }
    return "Too many requests!";
  };
}
