const fs = require("fs");
const input = fs
    .readFileSync("./몫구하기.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => parseInt(v));

const solution = (num1, num2) => {
    const ans = (num1 - (num1 % num2)) / num2;
    return ans;
};

const solution2 = (num1, num2) => {
    return parseInt(num1 / num2);
};

console.log(solution2(input[0], input[1]));
