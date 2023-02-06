const fs = require("fs");
const input = fs
    .readFileSync("./두수의나눗셈.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => parseInt(v));

const solution = (num1, num2) => {
    return parseInt((num1 / num2) * 1000);
};

const solution2 = (num1, num2) => {
    return ((num1 * 1000) / num2) >> 0;
};
console.log(solution2(input[0], input[1]));
