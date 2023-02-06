const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./배열원소의길이.txt"));

const solution = strlist => {
    const ans = [];

    for (str of strlist) {
        ans.push(str.length);
    }

    return ans;
};

const solution2 = strlist => strlist.map(el => el.length);

console.log(solution2(input));
