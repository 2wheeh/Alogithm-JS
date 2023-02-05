const fs = require("fs");
const input = parseInt(fs.readFileSync("./각도기.txt").toString());

const solution = angle => {
    if (angle < 90) return 1;
    else if (angle === 90) return 2;
    else if (angle < 180) return 3;
    else return 4;
};

const solution2 = angle => {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
};

console.log(solution(input));
