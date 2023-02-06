const fs = require("fs");
const input = fs.readFileSync("./중복된숫자개수.txt").toString().trim().split("\n");

const array = JSON.parse(input[0]);
const n = parseInt(input[1]);

const solution = (array, n) => {
    let count = 0;
    array.map(e => {
        if (e === n) count++;
    });

    return count;
};

console.log(solution(array, n));
