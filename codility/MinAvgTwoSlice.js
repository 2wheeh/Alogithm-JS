// https://app.codility.com/demo/results/trainingAZDNSB-JGQ/

function solution(A) {
    const l = A.length;
    let min = (A[0] + A[1]) / 2;
    let ans = 0;

    for (let i = 2; i < l; i++) {
        const sum2 = A[i - 1] + A[i];
        const avg2 = sum2 / 2;
        const sum3 = sum2 + A[i - 2];
        const avg3 = sum3 / 3;

        if (avg2 < min) {
            min = avg2;
            ans = i - 1;
        }

        if (avg3 < min) {
            min = avg3;
            ans = i - 2;
        }
    }

    return ans;
}
