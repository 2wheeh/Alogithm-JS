const fs = require("fs");
const input = parseInt(fs.readFileSync("./짝수는싫어요.txt").toString());

const solution = n => {
    const ans = [];
    const num = (n + (n % 2)) / 2;

    for (let i = 0; i < num; i++) {
        ans.push((i + 1) * 2 - 1);
    }

    return ans;
};

const solution2 = n => {
    const ans = [];

    for (let i = 1; i <= n; i += 2) ans.push(i);

    return ans;
};

console.log(solution2(input));
