const fs = require("fs");
const input = fs.readFileSync("./0단계/문자열계산하기.txt").toString();

const solution = my_string => {
    const arr = my_string.split(" ");

    let ans = parseInt(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] === "+") ans += parseInt(arr[i + 1]);
        else ans -= parseInt(arr[i + 1]);
    }

    return ans;
};

console.log(solution(input));
