const fs = require("fs");
const input = fs.readFileSync("./BOJ/2675.txt").toString().trim().split("\n");
// '/dev/stdin' : BOJ input directory

const solution = (R, S) => {
    let ans = "";
    const stringArr = [...S];
    stringArr.forEach(e => {
        for (let i = 0; i < R; i++) {
            ans += e;
        }
    });

    return ans;
};

for (let i = 1; i < parseInt(input[0]) + 1; i++) {
    const arr = input[i].split(" ");

    console.log(solution(parseInt(arr[0]), arr[1]));
}
