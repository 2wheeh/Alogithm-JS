const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./codility/tapeEquilibrium.txt"));

function solution(A) {
    const accArr = [];

    const totalSum = A.reduce((acc, cur) => {
        acc += cur;
        accArr.push(acc);

        return acc;
    }, 0);

    let ans = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < accArr.length - 1; i++) {
        ans = Math.min(ans, Math.abs(totalSum - accArr[i] * 2));
    }

    return ans;
}

console.log(solution(input));
