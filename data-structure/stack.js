class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldNode = this.first;
      this.first = newNode;
      this.first.next = oldNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    const oldNode = this.first;
    this.first = this.first.next;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    this.size--;
    return oldNode.value;
  }
}

const stack = new Stack();

// stack.push("Mostafa");
// stack.push("DE");
// stack.push("!!");

// console.log(stack);
