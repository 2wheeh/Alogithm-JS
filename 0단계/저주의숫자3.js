const fs = require("fs");
const input = parseInt(fs.readFileSync("./0단계/저주의숫자3.txt").toString());

const solution = n => {
    const numbers = Array.from({ length: 200 }, (_, x) => x);
    const numInTown = numbers.filter(n => n % 3 !== 0 && !n.toString().includes("3"));

    return numInTown[n - 1];
};

console.log(solution(input));
