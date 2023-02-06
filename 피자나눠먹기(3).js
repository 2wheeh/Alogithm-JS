const fs = require("fs");
const input = fs
    .readFileSync("./피자나눠먹기(3).txt")
    .toString()
    .split(" ")
    .map(e => parseInt(e));

const solution = (slice, n) => {
    return Math.ceil(n / slice);
};

console.log(solution(input[0], input[1]));
