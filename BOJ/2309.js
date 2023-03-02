const fs = require("fs");
const heights = fs
    .readFileSync("./BOJ/2309.txt")
    .toString()
    .trim()
    .split("\n")
    .map(v => +v);

const combination = (n, arr, fixed) => {
    fixed.push(arr[n]);
    combination(n - 1, arr.slice(0, n - 1));
};

combination(7, heights, []);
