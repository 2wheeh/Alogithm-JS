const fs = require("fs");
const input = fs.readFileSync("./문자반복출력하기.txt").toString().trim().split("\n");

const solution = (my_string, n) => {
    const strArr = Array.from(my_string);
    const ans = [];

    for (str of strArr) {
        for (let i = 0; i < n; i++) ans.push(str);
    }

    return ans.join("");
};

const solution2 = (my_string, n) => {
    const ans = [...my_string].map(v => v.repeat(n)).join("");
    return ans;
};

console.log(solution2(input[0], input[1]));
