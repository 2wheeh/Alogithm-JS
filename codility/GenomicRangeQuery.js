// https://app.codility.com/demo/results/trainingVYJMYV-4N2/

function solution(S, P, Q) {
    const result = [];
    const impact = ["A", "C", "G", "T"];

    for (let i = 0; i < P.length; i++) {
        const query = S.slice(P[i], Q[i] + 1);

        for (let j = 0; j < impact.length; j++) {
            if (query.indexOf(impact[j]) !== -1) {
                result.push(j + 1);
                break;
            }
        }
    }

    return result;
}
