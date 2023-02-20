const fs = require("fs");
const input = fs
    .readFileSync("./BOJ/9020.txt")
    .toString()
    .trim()
    .split("\n")
    .map(v => +v);

const numbers = new Array(10001).fill(1);
const getPrimes = () => {
    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] === 0) continue;

        for (let j = i * 2; j < numbers.length; j += i) {
            numbers[j] = 0;
        }
    }

    numbers[0] = 0;
    numbers[1] = 0;
};

getPrimes();

const solution = n => {
    const s = parseInt(n / 2);
    let leftPointer = s;
    let rightPointer = s;

    while (leftPointer > 0 && !numbers[leftPointer]) leftPointer--;
    while (rightPointer < n && !numbers[rightPointer]) rightPointer++;

    while (leftPointer > 0 && rightPointer < n) {
        if (leftPointer + rightPointer === n) return `${leftPointer} ${rightPointer}\n`;
        else if (leftPointer + rightPointer > n) while (leftPointer > 0 && !numbers[--leftPointer]);
        else while (rightPointer < n && !numbers[++rightPointer]);
    }
};

let ans = "";
for (let i = 1; i < input[0] + 1; i++) {
    ans += solution(input[i]);
}

console.log(ans);
