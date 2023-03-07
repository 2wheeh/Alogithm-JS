// 노드의 연결 정보 인접 리스트로 표현
const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

const solution = graph => {
    const visited = Array(9).fill(false);

    let ans = "";

    const dfs = (graph, v, visited) => {
        // 현재 노드를 방문 처리
        visited[v] = true;
        ans += `${v} `;

        // 노드의 인접 노드들을 재귀적으로 방문
        graph[v].forEach(u => {
            if (!visited[u]) dfs(graph, u, visited);
        });
    };

    dfs(graph, 1, visited);
    console.log(ans);
};

const solution2 = graph => {
    const visited = Array(9).fill(false);

    const dfs = (graph, start, visited) => {
        const stk = [];
        stk.push(start);

        visited[start] = true;

        let ans = "";

        while (stk.length) {
            const v = stk.pop();
            ans += `${v} `;

            // graph[v].forEach(u => {
            graph[v].reverse().forEach(u => {
                if (!visited[u]) {
                    stk.push(u);
                    visited[u] = true;
                }
            });
        }

        console.log(ans);
    };

    dfs(graph, 1, visited);
};

solution(graph);
solution2(graph);
