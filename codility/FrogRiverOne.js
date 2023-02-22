// https://app.codility.com/demo/results/trainingCHD5YR-G3H/

const fs = require("fs");
const [X, ...A] = fs.readFileSync("./codility/FrogRiverOne.txt").toString().trim().split(" ");

function solution(X, A) {
    // Implement your solution here
    // K초에 떨어진 낙엽 위치 A[K] = N
    const count = new Array(X + 1).fill(false);

    let checkSum = 0;
    let ans = -1;

    for (let sec = 0; sec < A.length; sec++) {
        const pos = A[sec];

        if (!count[pos]) {
            count[pos] = true;
            checkSum++;
        }

        if (checkSum === X) return sec;
    }

    return -1;
}

console.log(
    solution(
        +X,
        A.map(v => +v)
    )
);
