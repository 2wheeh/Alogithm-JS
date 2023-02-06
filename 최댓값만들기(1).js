const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./최댓값만들기(1).txt"));

const solution = numbers => {
    const big = [0, 0];

    numbers.map(e => {
        if (e >= big[0]) {
            big[1] = big[0];
            big[0] = e;
        } else if (big[0] > e >= big[1]) big[1] = e;
    });

    return big[0] * big[1];
};

console.log(solution(input));
