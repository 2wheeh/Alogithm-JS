const fs = require("fs");
const input = fs.readFileSync("./prac/dfs_ex1.txt").toString().trim().split("\n");
const graph = [];
const [N, M] = input[0].split(" ").map(Number);

input.splice(1).forEach(v => {
    const adj = v.split("").map(Number);
    graph.push(adj);
});

const solution = (graph, N, M) => {
    let ret = 0;

    const dfs = (x, y) => {
        if (x <= -1 || x >= N || y <= -1 || y >= M) return false;

        if (!graph[x][y]) {
            graph[x][y] = 1;

            dfs(x - 1, y);
            dfs(x, y - 1);
            dfs(x + 1, y);
            dfs(x, y + 1);
            return true;
        }

        return false;
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (dfs(i, j)) ret += 1;
        }
    }

    return ret;
};

console.log(solution(graph, N, M));
