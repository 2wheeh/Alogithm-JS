class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.size += 1;
    }

    dequeue() {
        if (!this.head) return false;

        const data = this.head.data;
        this.head = this.head.next;
        this.size -= 1;

        return data;
    }

    front() {
        return this.head && this.head.data;
    }
}

const solution = graph => {
    const visited = Array(9).fill(false);

    const bfs = (graph, start, visited) => {
        const queue = new Queue();
        queue.enqueue(start);

        visited[start] = true;

        let ans = "";

        while (queue.size) {
            const v = queue.dequeue();
            ans += `${v} `;

            graph[v].forEach(u => {
                if (!visited[u]) {
                    queue.enqueue(u);
                    visited[u] = true;
                }
            });
        }

        console.log(ans);
    };

    bfs(graph, 1, visited);
};

const solution2 = graph => {
    const visited = Array(9).fill(false);

    const bfs = (graph, start, visited) => {
        const queue = [];
        queue.push(start);

        visited[start] = true;

        let ans = "";

        while (queue.length) {
            const v = queue.shift();
            ans += `${v} `;

            graph[v].forEach(u => {
                if (!visited[u]) {
                    queue.push(u);
                    visited[u] = true;
                }
            });
        }

        console.log(ans);
    };

    bfs(graph, 1, visited);
};

const graph = [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]];

solution(graph);
solution2(graph);
