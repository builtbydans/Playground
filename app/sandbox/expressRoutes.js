/*
Challenge 5 – Routes + Query Params

Complete this minimal Express server so that:

GET / responds with "Hello, world!"
GET /greet?name=Dan responds with "Hello, Dan!"
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/greet", (req, res) => {
  const { name } = req.query;
  res.send(`Hello, ${name || "world"}!`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
