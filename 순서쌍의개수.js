const fs = require("fs");
const input = parseInt(fs.readFileSync("./순서쌍의개수.txt").toString());

const solution = n => {
    const root = Math.pow(n, 0.5) << 0;
    let count = 0;
    for (let i = 1; i < root + 1; i++) {
        if (n % i === 0) count++;
    }
    if (root * root === n) return count * 2 - 1;
    else return count * 2;
};

const solution2 = n => {
    let ans = 0;
    const root = Math.sqrt(n);

    for (let i = 1; i < root; i++) {
        if (n % i === 0) ans += 2;
    }

    return Number.isInteger(root) ? ans + 1 : ans;
};

console.log(solution2(input));
