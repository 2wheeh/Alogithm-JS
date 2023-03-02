function solution(A) {
    // Implement your solution here
    const count = Array(1000001).fill(false);

    for (const n of A) {
        if (n > 0 && !count[n]) count[n] = true;
    }

    for (let i = 1; i < 1000001; i++) {
        if (!count[i]) return i;
    }
}
