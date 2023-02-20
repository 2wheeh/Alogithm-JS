const solution = array => {
    const numbers = {};

    array.map(x => {
        if (x in numbers) {
            numbers[x] += 1;
        } else {
            numbers[x] = 1;
        }
    });

    const sortedArr = [];
    for (let num in numbers) {
        sortedArr.push([num, numbers[num]]);
    }

    sortedArr.sort((a, b) => b[1] - a[1]);

    return sortedArr[0] === sortedArr[1] ? -1 : parseInt(sortedArr[0][0]);
};