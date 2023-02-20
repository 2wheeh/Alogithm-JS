const fs = require("fs");
const input = fs.readFileSync("./BOJ/2628.txt").toString().trim().split("\n");

const width = parseInt(input[0].split(" ")[0]);
const height = parseInt(input[0].split(" ")[1]);

const widthCut = [];
const heightCut = [];

for (let i = 2; i < 2 + parseInt(input[1]); i++) {
    const arr = input[i].split(" ");
    if (arr[0] === "0") heightCut.push(parseInt(arr[1]));
    else widthCut.push(parseInt(arr[1]));
}

widthCut.push(0);
widthCut.push(width);
widthCut.sort((a, b) => a - b);

heightCut.push(0);
heightCut.push(height);
heightCut.sort((a, b) => a - b);

const findMaxCut = arr => {
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        const delta = arr[i + 1] - arr[i];
        if (delta > max) max = delta;
    }

    return max;
};

console.log(findMaxCut(widthCut) * findMaxCut(heightCut));
