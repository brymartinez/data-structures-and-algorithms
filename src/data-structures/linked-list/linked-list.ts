export class LinkedListNode<T = any> {
  data: T;
  next: LinkedListNode<T> = null;
  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T = any> {
  head: LinkedListNode<T>;
  constructor(head: LinkedListNode<T> = null) {
    this.head = head;
  }

  public display() {
    const result = [];

    let node = this.head;

    while (node) {
      result.push(node.data);
      node = node.next;
    }

    return result;
  }

  public sort() {
    let currentNode = this.head;
    let index = null;
    let temp: T;

    if (this.head === null) {
      return;
    } else {
      while (currentNode !== null) {
        index = currentNode.next;
        while (index !== null) {
          if (currentNode.data > index.data) {
            temp = currentNode.data;
            currentNode.data = index.data;
            index.data = temp;
          }
          index = index.next;
        }
        currentNode = currentNode.next;
      }
    }
  }

  public insertStart(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);

    if (this.head !== null) {
      node.next = this.head;
    }

    this.head = node;
    return node;
  }

  public insertAfter(prevNode: LinkedListNode<T>, data: T): LinkedListNode<T> {
    if (!prevNode) {
      throw new Error('Previous node cannot be null.');
    }

    const node = new LinkedListNode(data);

    node.next = prevNode.next;
    prevNode.next = node;

    return node;
  }

  public insertEnd(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);

    if (this.head === null) {
      this.head = node;
      return this.head;
    }

    node.next = null;

    let finalNode = this.head;

    while (finalNode.next !== null) {
      finalNode = finalNode.next;
    }

    finalNode.next = node;
    return node;
  }

  public delete(node: LinkedListNode<T>) {
    // Look for the previous node
    let temp = this.head;

    if (this.head === node) {
      // last node
      this.head = null;
    }

    let previousNode: LinkedListNode<T> = null;
    while (temp.data !== node.data) {
      previousNode = temp;
      temp = temp.next;
    }

    if (previousNode !== null) previousNode.next = node.next;
  }

  public search(element: T): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === element) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
}
