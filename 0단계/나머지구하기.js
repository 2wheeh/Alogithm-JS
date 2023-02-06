const fs = require("fs");
const input = fs
    .readFileSync("./나머지구하기.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => parseInt(v));

const solution = (num1, num2) => num1 % num2;

console.log(solution(input[0], input[1]));
