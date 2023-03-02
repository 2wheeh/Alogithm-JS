function fakeAPI(str) {
    if (typeof str !== "string") return -1;
    return new Promise(resolve => setTimeout(() => resolve(str.length), 2000));
}

async function iterableCall(arr) {
    const ans = [];
    for (const str of arr) {
        ans.push(fakeAPI(str));
    }

    return await Promise.all(ans);
}

const testArr = [3, "KRAFTON", "PUBG"];
iterableCall(testArr).then(console.log);
