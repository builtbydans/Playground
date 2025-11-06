/*
Challenge 1 – Logic & Functions

You get an array of scores.
Write a function that returns true if the average of the scores is 
higher than the highest single score from the previous round, which is given as a number.

*/

// Example
const scores = [75, 80, 95];
const lastRoundBest = 90;

const brokeRecord = (scores, lastRoundBest) => {
  const avg = scores.reduce((acc, n) => acc + n, 0) / scores.length;
  return avg > lastRoundBest;
};

console.log(brokeRecord(scores, lastRoundBest)); // expected true

// TODO: implement brokeRecord()
