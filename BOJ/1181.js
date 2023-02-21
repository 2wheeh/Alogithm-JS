const fs = require("fs");
const [n, ...input] = fs.readFileSync("./BOJ/1181.txt").toString().trim().split("\n");

const arr = new Array(51).fill(false);

input.forEach(v => {
    if (!arr[v.length]) arr[v.length] = new Set();
    arr[v.length].add(v);
});

let ans = "";
const sorted = arr.map(v => (v ? [...v].sort() : false));
sorted.forEach(v => {
    if (v) {
        v.forEach(v => {
            ans += `${v}\n`;
        });
    }
});

console.log(ans);
