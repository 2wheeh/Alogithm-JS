const nCr = (array, r) => {
    const results = [];

    if (r === 1) {
        return array.map(el => [el]);
    }

    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = nCr(rest, r - 1);
        const attached = combinations.map(combination => [fixed, ...combination]);

        results.push(...attached);
    });

    return results;
};

const nPr = (array, r) => {
    const results = [];

    if (r === 1) return array.map(el => [el]);

    array.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = nPr(rest, r - 1);
        const attached = permutations.map(permutation => [fixed, ...permutation]);

        results.push(...attached);
    });

    return results;
};

console.log(nCr([1, 2, 3, 4], 3));
console.log(nPr([1, 2, 3], 2));
