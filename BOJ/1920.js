const fs = require("fs");
const input = fs.readFileSync("./BOJ/1920.txt").toString().trim().split("\n");

const A = input[1].split(" ");
const X = input[3].split(" ");

const solution = () => {
    let ans = "";

    const set = new Set(A);

    for (const x of X) {
        ans += `${Number(set.has(x))}\n`;
    }

    return ans;
};

console.log(solution());
