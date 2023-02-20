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
    let flag = true;

    while (leftPointer > 0 && rightPointer < n) {
        if (numbers[leftPointer] * numbers[rightPointer]) {
            if (leftPointer + rightPointer === n) return leftPointer.toString() + " " + rightPointer.toString();
            else if (flag) {
                leftPointer--;
                flag = !flag;
            } else {
                rightPointer++;
                flag = !flag;
            }
        } else if (!numbers[leftPointer]) {
            leftPointer--;
        } else if (!numbers[rightPointer]) {
            rightPointer++;
        }
    }
};

for (let i = 1; i < input[0] + 1; i++) {
    console.log(solution(input[i]));
}
