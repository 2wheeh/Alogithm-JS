const fs = require("fs");
const input = fs
    .readFileSync("./양꼬치.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => parseInt(v));

const KKOCHI_PRICE = 12000;
const DRINK_PRICE = 2000;

const solution = (n, k) => {
    const service = (n / 10) << 0;
    return n * KKOCHI_PRICE + (k - service) * DRINK_PRICE;
};

console.log(solution(input[0], input[1]));
