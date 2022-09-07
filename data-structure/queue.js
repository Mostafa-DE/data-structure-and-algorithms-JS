class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;

    const oldNode = this.first;
    this.first = this.first.next;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    this.size--;
    return oldNode;
  }
}
