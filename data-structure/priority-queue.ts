interface INode {
  value: string;
  priority: number;
}

export class Node implements INode {
  constructor(public value: string, public priority: number) {}
}

// Implemented using MinBinaryHeap

class PriorityQueue {
  constructor(public values: Node[] = []) {}

  enqueue(value: string, priority: number) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);

    let newValueIndex = this.values.indexOf(newNode);
    let newValue = this.values[newValueIndex];
    while (newValueIndex > 0) {
      let parentIndex = Math.floor((newValueIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (newValue.priority >= parentValue.priority) break;
      this.values[parentIndex] = newValue;
      this.values[newValueIndex] = parentValue;
      newValueIndex = parentIndex;
    }
  }

  dequeue() {
    const minValue = this.values[0];
    const newMaxValue = this.values.pop();
    if (this.values.length > 0 && newMaxValue) this.values[0] = newMaxValue;

    let indx = 0;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * indx + 1;
      let rightChildIndex = 2 * indx + 2;
      let leftChildPriority = this.values[leftChildIndex]?.priority;
      let rightChildPriority = this.values[rightChildIndex]?.priority;
      let swap: number | null = null;

      if (
        rightChildPriority < element?.priority &&
        leftChildPriority < element?.priority
      ) {
        if (rightChildPriority < leftChildPriority) swap = rightChildIndex;
        if (leftChildPriority < rightChildPriority) swap = leftChildIndex;
      } else {
        if (leftChildPriority < element?.priority) swap = leftChildIndex;
        if (rightChildPriority < element?.priority) swap = rightChildIndex;
      }

      if (!swap) break;
      this.values[indx] = this.values[swap];
      this.values[swap] = element;
      indx = swap;
    }

    return minValue;
  }
}

const pQueue = new PriorityQueue();

// 1 - highest priority
// 5 - lowest priority
pQueue.enqueue("common cold", 5);
pQueue.enqueue("gunshot wound", 1);
pQueue.enqueue("high fever", 4);
pQueue.enqueue("broken arm", 2);

console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());

console.log(pQueue.values);
