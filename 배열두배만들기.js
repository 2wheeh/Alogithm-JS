const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./배열두배만들기.txt"));

const solution = numbers => numbers.map(e => e * 2);

console.log(solution(input));
