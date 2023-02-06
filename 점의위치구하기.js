const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./점의위치구하기.txt"));

const solution = dot => {
    const x = dot[0];
    const y = dot[1];

    if (x > 0 && y > 0) return 1;
    else if (x < 0 && y > 0) return 2;
    else if (x < 0 && y < 0) return 3;
    else return 4;
};

console.log(solution(input));
