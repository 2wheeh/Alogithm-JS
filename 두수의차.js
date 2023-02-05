const fs = require("fs");
const input = fs
    .readFileSync("./두수의차.txt")
    .toString()
    .split(" ")
    .map(v => parseInt(v));

const solution = (num1, num2) => {
    const answer = num1 - num2;

    return answer;
};

console.log(solution(input[0], input[1]));
