const fs = require("fs");
const input = parseInt(fs.readFileSync("./짝수의합.txt").toString());

const solution = n => {
    const m = parseInt(n / 2);
    return m * (m + 1);
};

console.log(solution(input));
