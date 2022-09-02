class Node {
  constructor(value) {
    this.value = value;
    this.nextValue = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextValue = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head; // it should be tail at the end
    let newTail = currentNode;
    while (currentNode.nextValue) {
      newTail = currentNode;
      currentNode = currentNode.nextValue;
    }
    this.tail = newTail;
    this.tail.nextValue = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.nextValue;
    this.length--;

    if (this.length === 0) this.tail = null;

    return oldHead;
  }

  unshift(val) {
    let oldHead = this.head;
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.head = newNode;
    this.head.nextValue = oldHead;
    this.length++;

    return this;
  }

  get(idx) {
    if (this.length === 0) throw new Error("The list is empty!");

    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index!!");
    }

    if (this.length === 0) return null;
    let targetNode = this.head;

    for (let i = 0; i <= this.length; i++) {
      if (targetNode === null) break;
      if (idx === i) break;
      targetNode = targetNode.nextValue;
    }

    return targetNode;
  }

  set(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index!!");
    }

    if (this.length === 0) return null;
    let targetNode = this.head;

    for (let i = 0; i <= this.length; i++) {
      if (targetNode === null) {
        targetNode = false;
        break;
      }

      if (idx === i) {
        targetNode.value = val;
        break;
      }

      targetNode = targetNode.nextValue;
    }

    return targetNode;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index!!");
    }

    if (idx === 0) {
      this.unshift(val);
      return this;
    }

    if (idx === this.length) {
      this.push(val);
      return this;
    }

    let newNode = new Node(val);
    let currentNode = this.get(idx);
    let prevNode = this.get(idx - 1);

    prevNode.nextValue = newNode;
    newNode.nextValue = currentNode;
    this.length++;

    return this;
  }

  remove(idx) {
    if (this.length === 0) throw new Error("The list is empty!");

    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index!!");
    }

    if (idx === this.length - 1) {
      this.pop();
      return this;
    }

    if (idx === 0) {
      this.shift();
      return this;
    }

    let prevNode = this.get(idx - 1);
    let futureNode = this.get(idx + 1);

    prevNode.nextValue = futureNode;
    this.length--;

    return this;
  }

  reverse() {
    if (this.length === 0) throw new Error("The list is empty!");
    // list ==> Mostafa, DE, !!, test
    //           Tail            Head
    // oldHead = Mostafa ||| oldHead.nextValue = DE
    //  test, DE, !!, Mostafa ||| futureNode = DE

    let oldHead = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    let prevNode = null; // this should be null at the first iteration because tail is always pointing to null
    let futureNode;

    for (let i = 0; i < this.length; i++) {
      futureNode = oldHead.nextValue;
      oldHead.nextValue = prevNode; // here the oldHead at the first iteration should be null
      prevNode = oldHead;
      oldHead = futureNode;
    }
    return this;
  }

  search(val) {
    if (this.length === 0) throw new Error("The list is empty!");

    let currentNode = this.head;
    let targetIdx = ` "${val}" Does not exist in the list!!`;

    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === val) {
        targetIdx = i;
        break;
      }
      currentNode = currentNode.nextValue;
    }

    return targetIdx;
  }
}

const list = new SinglyLinkedList();

list.push("Mostafa");
list.push("DE");
list.push("!!");
list.push("test");

let test = list.search("test");
let print = list.get(test);

console.log(print);
