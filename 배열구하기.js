const fs = require("fs");
const inputArr = Array.from(fs.readFileSync("./배열구하기.txt").toString().trim());

const numbers = JSON.parse(inputArr.slice(0, -4).join(""));
const num1 = inputArr[inputArr.length - 3];
const num2 = inputArr[inputArr.length - 1];

const solution = (numbers, num1, num2) => {
    return numbers.slice(num1, ++num2);
};

console.log(solution(numbers, num1, num2));
