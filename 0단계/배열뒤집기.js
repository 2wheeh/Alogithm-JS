const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./배열뒤집기.txt"));

const solution = num_list => num_list.reverse();

console.log(solution(input));
