const fs = require("fs");
const input = fs
    .readFileSync("./BOJ/2869.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => parseInt(v));

const solution = (A, B, V) => {
    return Math.ceil((V - A) / (A - B)) + 1;
};

console.log(solution(input[0], input[1], input[2]));
