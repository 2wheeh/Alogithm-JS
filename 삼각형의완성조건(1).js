const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./삼각형의완성조건(1).txt"));

const solution = sides => {
    sides.sort((a, b) => a - b);
    return sides[2] < sides[0] + sides[1] ? 1 : 2;
};

console.log(solution(input));
