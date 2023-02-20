const fs = require("fs");
const input = parseInt(fs.readFileSync("./BOJ/1065.txt").toString().trim());

const solution = n => {
    if (n < 100) return n;

    const count = new Array(1001).fill(0);
    for (let i = 100; i <= n; i++) {
        const arr = [...i.toString()].map(v => parseInt(v));
        if (arr[0] + arr[2] === 2 * arr[1]) count[i] = 1;
    }

    return 99 + count.reduce((acc, cur) => acc + cur, 0);
};

console.log(solution(input));
