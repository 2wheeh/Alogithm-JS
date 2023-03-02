// https://app.codility.com/demo/results/trainingU9MFCD-XV8/

const fs = require("fs");
const input = fs
    .readFileSync("./codility/PermCheck.txt")
    .toString()
    .trim()
    .split(" ")
    .map(v => +v);

function solution(A) {
    // Implement your solution here
    const N = A.length;
    const count = new Array(N + 1).fill(false);
    let check = 0;
    for (let i = 0; i < N; i++) {
        const v = A[i];
        if (!count[v] && v <= N) {
            count[A[i]] = true;
            check++;
        } else return 0;
    }

    if (check === N) return 1;
    else return 0;
}

console.log(solution(input));
console.log(typeof "aa", typeof "aa" === "string");
