const fs = require("fs");
const input = fs.readFileSync("./머쓱이보다키큰사람.txt").toString().split("\n");
const array = JSON.parse(input[0]);
const height = input[1];

const solution = (array, height) => array.filter(e => e > height).length;

console.log(solution(array, height));
