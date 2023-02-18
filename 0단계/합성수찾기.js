const fs = require("fs");
const input = parseInt(fs.readFileSync("./0단계/합성수찾기.txt").toString());

const solution = n => {
    const numbers = Array.from({ length: 101 }, x => 0);

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] === 1) continue;

        for (let j = i * 2; j < numbers.length; j += i) numbers[j] = 1;
    }

    let ans = 0;
    for (let i = 0; i < n + 1; i++) ans += numbers[i];

    return ans;
};

console.log(solution(input));
