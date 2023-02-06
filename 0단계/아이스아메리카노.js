const fs = require("fs");
const input = parseInt(fs.readFileSync("./아이스아메리카노.txt").toString());

const ICEAMERICANO = 5500;

const solution = money => {
    const cups = (money / ICEAMERICANO) << 0;
    const leftover = money - cups * ICEAMERICANO;
    return [cups, leftover];
};

console.log(solution(input));
