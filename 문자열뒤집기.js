const fs = require("fs");
const input = fs.readFileSync("./문자열뒤집기.txt").toString().trim();

const solution = my_string => {
    const stringArr = my_string.split("");
    const reverseArr = [];
    const length = stringArr.length;

    for (let i = 0; i < length; i++) {
        reverseArr.push(stringArr.pop());
    }

    return reverseArr.join("");
};

const solution2 = my_string => {
    return my_string.split("").reverse().join("");
};

const solution3 = my_string => {
    return Array.from(my_string).reverse().join("");
};

const solution4 = my_string => {
    return [...my_string].reverse().join("");
};

console.log(solution4(input));
