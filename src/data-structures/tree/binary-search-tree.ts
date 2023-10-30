export class BSTNode<T> {
  left: BSTNode<T> = null;
  right: BSTNode<T> = null;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinarySearchTree<T> {
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
      } else if (currentNode.value === value) {
        throw new Error('Value already exists in the tree.');
      } else {
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
      } else if (currentNode.value === value) {
        throw new Error('Value already exists in the tree.');
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
        }
        currentNode = currentNode.left;
      }
    }
    return currentNode;
  }
}
