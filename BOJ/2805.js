const fs = require("fs");
const input = fs.readFileSync("./BOJ/2805.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(v => +v);
const trees = input[1].split(" ").map(v => +v);

const solution = target => {
    let lo = 0;
    let hi = Math.max(...trees) - 1;
    let ret = 0;

    while (true) {
        const mid = parseInt((lo + hi) / 2);

        // const inHand = trees.reduce((acc, cur) => {
        //     const cut = cur - mid;
        //     if (cut > 0) acc += cut;

        //     return acc;
        // }, 0);

        let inHand = 0;
        for (let i = 0; i < N; i++) {
            const cut = trees[i] - mid;
            if (cut > 0) inHand += cut;
            if (inHand > target) break;
        }

        if (inHand === target) {
            return mid;
        } else if (inHand < target) {
            hi = mid - 1;
        } else if (inHand > target) {
            lo = mid + 1;
            ret = mid;
        }

        if (lo > hi) return ret;
    }
};

console.log(solution(M));
