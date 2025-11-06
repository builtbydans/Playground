/*
Challenge 3 – Async/Await & Fetch

You’re given a starter function. Complete it so that it:
Fetches a random joke from https://api.chucknorris.io/jokes/random
Logs the joke text
Handles any network errors gracefully (no crash)
*/

async function getJoke() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    console.log(data.value);
  } catch (err) {
    console.error("Error fetching joke:", err.message);
  }
}

getJoke();
