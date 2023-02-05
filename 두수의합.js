const fs = require("fs");
const input = fs
    .readFileSync("./두수의합.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => parseInt(v));

const solution = (num1, num2) => num1 + num2;

console.log(solution(input[0], input[1]));
