const fs = require("fs");
const input = parseInt(fs.readFileSync("./피자나눠먹기(1).txt").toString());

const solution = n => Math.ceil(n / 7);

console.log(solution(input));
