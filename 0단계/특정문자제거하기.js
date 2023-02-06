const fs = require("fs");
const input = fs.readFileSync("./특정문자제거하기.txt").toString().trim().split(" ");

const solution = (my_string, letter) =>
    Array.from(my_string)
        .filter(el => el !== letter)
        .join("");

const solution2 = (my_string, letter) => my_string.split(letter).join("");

console.log(solution2(input[0], input[1]));
