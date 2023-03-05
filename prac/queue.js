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
        if (!this.head) {
            return false;
        }

        const data = this.head.data;

        this.head = this.head.next;
        this.size -= 1;

        return data;
    }

    front() {
        return this.head && this.head.data;
    }

    getQueue() {
        if (!this.head) return false;

        let node = this.head;
        const array = [];
        while (node) {
            array.push(node.data);
            node = node.next;
        }

        return array;
    }
}

const queue = new Queue();
queue.enqueue(1);
console.log(queue.getQueue());
console.log(queue.dequeue());
console.log(queue.getQueue());
queue.enqueue(2);
queue.enqueue(1);
console.log(queue.front());
console.log(queue.getQueue());
console.log(queue.dequeue());
