const fs = require("fs");
const input = fs
    .readFileSync("./숫자비교하기.txt")
    .toString()
    .split(" ")
    .map(v => parseInt(v));

const solution = (num1, num2) => {
    if (num1 === num2) return 1;
    else return -1;
};

console.log(solution(input[0], input[1]));
