// https://app.codility.com/demo/results/training43Q8RE-PKQ/

function solution(A) {
    // Implement your solution here
    let toWest = A.reduce((acc, cur) => acc + cur, 0);
    let toEast = A.length - toWest;

    let total = 0;
    for (const v of A) {
        if (v === 0) {
            total += toWest;
            if (total > 1000000000) return -1;
        } else {
            toWest -= 1;
        }
    }

    return total;
}
