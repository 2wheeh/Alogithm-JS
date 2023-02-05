const fs = require("fs");
const input = parseInt(fs.readFileSync("./나이출력.txt").toString());

const refYear = 2022;

const solution = age => {
    return refYear - age + 1;
};

console.log(solution(input));
