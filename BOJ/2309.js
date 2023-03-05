const fs = require("fs");
const heights = fs
    .readFileSync("./BOJ/2309.txt")
    .toString()
    .trim()
    .split("\n")
    .map(v => +v);

const solution = () => {
    const sum = heights.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - heights[i] - heights[j] === 100) {
                heights.splice(i, 1);
                heights.splice(j - 1, 1);
                return heights.sort((a, b) => a - b).join("\n");
            }
        }
    }
};

console.log(solution());
