const fs = require("fs");
const N = +fs.readFileSync("./BOJ/9663.txt").toString().trim();

const pos = new Array(N).fill(0);

const flagA = new Array(N).fill(false);
const flagB = new Array(2 * N - 1).fill(false);
const flagC = new Array(2 * N - 1).fill(false);

let count = 0;

const set = i => {
    for (let j = 0; j < N; j++) {
        if (!flagA[j] && !flagB[i + j] && !flagC[i - j + N - 1]) {
            pos[i] = j;

            if (i === N - 1) count++;
            else {
                flagA[j] = flagB[i + j] = flagC[i - j + N - 1] = true;
                set(i + 1);
                flagA[j] = flagB[i + j] = flagC[i - j + N - 1] = false;
            }
        }
    }
};

set(0);
console.log(count);
