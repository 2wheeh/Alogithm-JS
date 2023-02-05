const fs = require("fs");
const input = parseInt(fs.readFileSync("./나이출력.txt").toString());

const solution = age => {
    const refYear = 2022;
    return refYear - age + 1;
};

console.log(solution(input));
