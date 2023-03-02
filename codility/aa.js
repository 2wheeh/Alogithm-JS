function solutions(S) {
    const countB = S.split("").filter(c => c === "B").length;
    const countA = S.length - countB;

    let ans = countA;
    let countBbefore = 0;
    let countAafter = countA;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "B") {
            countBbefore++;
        } else {
            countAafter--;
        }
        const deleteCount = countBbefore + countAafter;

        ans = Math.min(ans, deleteCount);
    }

    return ans;
}
console.log(solutions("BBBAAA"));
