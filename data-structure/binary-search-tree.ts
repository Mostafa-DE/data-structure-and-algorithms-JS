interface INode {
  value: number;
  left: INode | null;
  right: INode | null;
}

class NodeTree implements INode {
  constructor(
    public value: number,
    public left: INode | null = null,
    public right: INode | null = null
  ) {}
}

interface IBinarySearchTree {
  insert: (value: number) => IBinarySearchTree;
  find(value: number): INode | string;
}

class BinarySearchTree implements IBinarySearchTree {
  constructor(public root: INode | null = null) {}

  insert(value: number) {
    const newNode = new NodeTree(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) break;

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }

        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }

        currentNode = currentNode.right;
      }
    }

    return this;
  }

  find(value: number) {
    if (!this.root) return "The tree is empty.";
    if (this.root.value === value) return this.root;
    let currentNode = this.root;
    let targetNode: string | INode = "Can't find the node in the tree.";

    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) break;
        if (currentNode.right.value === value) {
          targetNode = currentNode.right;
          break;
        }
        currentNode = currentNode.right;
      }

      if (value < currentNode.value) {
        if (!currentNode.left) break;
        if (currentNode.left.value === value) {
          targetNode = currentNode.left;
          break;
        }

        currentNode = currentNode.left;
      }
    }

    return targetNode;
  }

  // ----------------------------------------------------------------
  // Tree Traversal
  // This way we can search in any tree structure no matter if the tree is binary or not
  // Breadth-first search
  // Remember in the queue { first in <---> first out }
  BFS(value: number) {
    const visitedNode: INode[] = [];
    const queue: INode[] = [];
    let firstValueInQueue: INode | undefined;
    let targetNode: INode | string =
      "The node you are looking for is not exist in the tree.";

    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      firstValueInQueue = queue.shift();

      if (firstValueInQueue) {
        if (firstValueInQueue.value === value) targetNode = firstValueInQueue;
        visitedNode.push(firstValueInQueue);
        if (firstValueInQueue.left) queue.push(firstValueInQueue.left);
        if (firstValueInQueue.right) queue.push(firstValueInQueue.right);
      }
    }

    return targetNode;
  }

  // ----------------------------------------------------------------
  // Depth-first search
  // Pre-Order method
  DFSPreOrder(value: number) {
    const data: INode[] = [];
    let targetNode: INode | string =
      "The node you are looking for is not exist in the tree.";

    const traversal = (node: INode) => {
      data.push(node);
      if (node.value === value) targetNode = node;
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };

    if (this.root) traversal(this.root);

    return targetNode;
  }

  // Post-Order method
  DFSPostOrder(value: number) {
    const data: INode[] = [];
    let targetNode: INode | string =
      "The node you are looking for is not exist in the tree.";

    const traversal = (node: INode) => {
      if (node.value === value) targetNode = node;
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node);
    };

    if (this.root) traversal(this.root);

    return targetNode;
  }

  // In-Order method
  DFSInOrder(value: number) {
    const data: INode[] = [];
    let targetNode: INode | string =
      "The node you are looking for is not exist in the tree.";

    const traversal = (node: INode) => {
      if (node.value === value) targetNode = node;
      if (node.left) traversal(node.left);
      data.push(node);
      if (node.right) traversal(node.right);
    };

    if (this.root) traversal(this.root);

    return targetNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);
