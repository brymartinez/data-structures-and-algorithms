export class BSTNode<T = any> {
  left: BSTNode<T> = null;
  right: BSTNode<T> = null;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinarySearchTree<T = any> {
  root: BSTNode<T> = null;
  constructor() {}

  public insert(value: T) {
    let currentNode = this.root;
    const newNode = new BSTNode(value);

    if (currentNode === null) {
      this.root = newNode;
      return this.root;
    }

    while (currentNode.value !== value) {
      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
        }
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        }
        currentNode = currentNode.left;
      }
    }
    return currentNode;
  }

  public find(value: T) {
    let currentNode = this.root;

    if (!currentNode) {
      return null;
    }

    while (true) {
      if (!currentNode) {
        return null;
      } else if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value < value) {
        // right
        currentNode = currentNode.right; // may be null
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      }
    }
  }

  public bfs() {
    const q = [];
    const visitedNodes = [];
    q.push(this.root);

    while (q.length) {
      const node = q.shift();
      visitedNodes.push(node.value);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }

    return visitedNodes;
  }

  public preOrder() {
    const visitedNodes = [];

    const traverse = (node: BSTNode) => {
      visitedNodes.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return visitedNodes;
  }

  public postOrder() {
    const visitedNodes = [];

    const traverse = (node: BSTNode) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visitedNodes.push(node.value);
    };

    traverse(this.root);

    return visitedNodes;
  }

  public inOrder() {
    const visitedNodes = [];

    const traverse = (node: BSTNode) => {
      if (node.left) {
        traverse(node.left);
      }

      visitedNodes.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return visitedNodes;
  }
}
