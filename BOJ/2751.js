const fs = require("fs");
const input = fs
    .readFileSync("./BOJ/2751.txt")
    .toString()
    .trim()
    .split("\n")
    .map(v => +v);

let ans = "";

input
    .slice(1)
    .sort((a, b) => a - b)
    .map(v => {
        ans += `${v}\n`;
    });

console.log(ans);
