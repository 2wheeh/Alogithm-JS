const fs = require("fs");
const input = +fs.readFileSync("./BOJ/1914.txt").toString();

const ans = BigInt(2 ** input) - 1n;
let step = "";

const hanoi = (from, to, num) => {
    if (num > 1) hanoi(from, 6 - from - to, num - 1);
    step += `${from} ${to}\n`;
    if (num > 1) hanoi(6 - from - to, to, num - 1);
};

console.log(ans.toString());

if (input <= 20) {
    hanoi(1, 3, input);
    console.log(step);
}
