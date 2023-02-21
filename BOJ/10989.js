const fs = require("fs");

const count = new Array(10001).fill(0);

const input = fs
    .readFileSync("./BOJ/10989.txt")
    .toString()
    .trim()
    .split("\n")
    .forEach((v, i) => {
        if (i > 0) count[+v]++;
    });

let ans = "";
count.forEach((count, i) => {
    for (let j = 0; j < count; j++) ans += `${i}\n`;
});

console.log(ans);

// node.js 로 BOJ 메모리기준 통과 불가능
