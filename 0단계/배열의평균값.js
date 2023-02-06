const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./배열의평균값.txt").toString());

const solution = numbers => {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const avg = sum / numbers.length;

    return avg.toFixed(1);
};

console.log(solution(input));
