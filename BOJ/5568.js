const [n, k, ...cards] = require("fs").readFileSync("./BOJ/5568.txt").toString().trim().split("\n");

const getPermutation = (r, arr) => {
    const results = [];

    if (r === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        // const rest = origin.slice(index + 1); // 조합
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutation(r - 1, rest);
        const attached = permutations.map(permutation => [fixed, ...permutation]);
        results.push(...attached);
    });

    return results;
};

const solution = (r, arr) => {
    const integers = new Set();

    getPermutation(r, arr).map(v => {
        let elem = "";

        v.forEach(v => {
            elem += `${v}`;
        });

        integers.add(elem);
    });

    return integers.size;
};

console.log(solution(+k, cards));
