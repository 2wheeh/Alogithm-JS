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

const solution = (N, M, graph) => {
    const bfs = (N, M, graph) => {
        const queue = new Queue();

        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];

        // start
        queue.enqueue([1, 1]);
        // graph[0][0] = 0;

        while (queue.size) {
            const [x, y] = queue.dequeue();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

                if (!graph[nx][ny]) continue;

                if (graph[nx][ny] === 1) {
                    graph[nx][ny] = graph[x][y] + 1;
                    queue.enqueue([nx, ny]);
                }
            }
        }

        return graph[N - 1][M - 1];
    };

    console.log(bfs(N, M, graph));
};

const fs = require("fs");
const input = fs.readFileSync("./prac/bfs_ex1.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = [];
input.forEach(el => {
    const array = el.split("").map(Number);
    graph.push(array);
});

solution(N, M, graph);
