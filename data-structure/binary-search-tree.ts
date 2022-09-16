interface INode {
  value: number;
  left: INode | null;
  right: INode | null;
}

class NodeTree implements INode {
  left: INode | null;
  right: INode | null;
  constructor(public value: number) {
    this.left = null;
    this.right = null;
  }
}

interface IBinarySearchTree {
  insert: (value: number) => IBinarySearchTree;
  find(value: number): INode | string;
}

class BinarySearchTree implements IBinarySearchTree {
  root: INode | null;
  constructor() {
    this.root = null;
  }

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
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(15);
tree.insert(10);
tree.insert(5);
tree.insert(0);
tree.find(-1);

console.log(tree);
