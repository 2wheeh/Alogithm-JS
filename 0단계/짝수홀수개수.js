const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./짝수홀수개수.txt"));

const solution = num_list => {
    const ans = [0, 0];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) ans[0]++;
        else ans[1]++;
    }

    return ans;
};

const solution2 = num_list => {
    const ans = [0, 0];
    for (let i = 0; i < num_list.length; i++) {
        ans[num_list[i] % 2]++;
    }

    return ans;
};

console.log(solution2(input));
