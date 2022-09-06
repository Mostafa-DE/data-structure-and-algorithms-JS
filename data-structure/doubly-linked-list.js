class Node {
    constructor(value) {
        this.value = value;
        this.nextvalue = null;
        this.prevsValue = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isValidIndex(idx, length) {
        if (idx < 0 || idx > length) throw new Error("Invalid index!!");
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextvalue = newNode;
            newNode.prevsValue = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pushAll(array) {
        for (let el of array) {
            if (!(typeof el === 'string' | 'number')) continue;
            this.push(el);
        }

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        const removedNode = this.tail;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = removedNode.prevsValue;
            this.tail.nextvalue = null;
        }

        this.length--;
        return removedNode;
    }

    shift() {
        if (!this.head) return undefined;

        const removedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.nextvalue;
            this.head.prevsValue = null;
        }

        this.length--;
        return removedNode;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.push(val);
        } else {
            const oldHead = this.head;
            newNode.nextvalue = oldHead;
            this.head = newNode;
        }

        this.length++;
        return newNode;
    }

    get(idx) {
        if (!this.head) return undefined;
        this.isValidIndex(idx, this.length);

        const midPoint = Math.round(this.length / 2)
        let targetNode = this.head;

        if (idx < midPoint) { // start from the beginning of the list
            for (let i = 0; i < this.length; i++) {
                if (this.head === null) break;
                if (idx === i) break;
                targetNode = targetNode.nextvalue;
            }

        } else { // start from the end of the list
            targetNode = this.tail;
            for (let i = this.length - 1; i > 1; i--) {
                if (this.head === null) break;
                if (idx === i) break;
                targetNode = targetNode.prevsValue;
            }
        }

        return targetNode;
    }

    set(val, idx) {
        if (!this.head) return undefined;
        const targetNode = this.get(idx);
        if (targetNode !== null) targetNode.value = val;

        return targetNode;
    }

    insert(val, idx) {
        if (idx === 0) {
            this.unshift(val);
            return this;
        }

        if (idx === this.length) {
            this.push(val);
            return this;
        }

        const newNode = new Node(val);
        const oldNode = this.get(idx - 1);
        const nextOldNode = oldNode.nextvalue;

        oldNode.nextvalue = newNode;
        newNode.prevsValue = oldNode;
        newNode.nextvalue = nextOldNode;
        nextOldNode.prevsValue = newNode;

        this.length++;
        return this;
    }

    remove(idx) {
        this.isValidIndex(idx, this.length);

        if (idx === 0) {
            this.shift();
            return this;
        }

        if (idx === this.length - 1) {
            this.pop();
            return this;
        }

        const prevsNode = this.get(idx - 1);
        const nextNode = this.get(idx + 1);

        prevsNode.nextvalue = nextNode;
        nextNode.prevsValue = prevsNode;

        this.length--;
        return this;
    }
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.pushAll(["Mostafa", "DE", "test", "!!"])

console.log(doublyLinkedList)
