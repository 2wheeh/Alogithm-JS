const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./0단계/최빈값구하기.txt"));

const solution = array => {
    const count = {};

    array.map(x => {
        if (x in count) {
            count[x] += 1;
        } else {
            count[x] = 1;
        }
    });

    const sortedArr = [];
    for (let num in count) {
        sortedArr.push([num, count[num]]);
    }

    if (sortedArr.length === 1) return parseInt(sortedArr[0][0]);
    else {
        sortedArr.sort((a, b) => b[1] - a[1]);

        return sortedArr[0][1] === sortedArr[1][1] ? -1 : parseInt(sortedArr[0][0]);
    }
};

const solution2 = array => {
    const count = new Map();

    array.forEach(num => {
        if (count.has(num)) {
            count.set(num, count.get(num) + 1);
        } else count.set(num, 1);
    });

    const max = Math.max(...count.values());
    const ans = Array.from(count).filter(e => e[1] === max);

    return ans.length > 1 ? -1 : ans[0][0];
};

console.log(solution2(input));
