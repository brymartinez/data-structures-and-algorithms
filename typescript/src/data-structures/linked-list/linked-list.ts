export class LinkedListNode<T = any> {
  data: T;
  next: LinkedListNode<T> = null;
  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T = any> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(val: T): LinkedListNode<T> {
    const node = new LinkedListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return node;
  }

  public pop(): LinkedListNode<T> {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTailNode = this.tail;

    while (currentNode.next) {
      newTailNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTailNode;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      // last element popped, reset list
      this.head = null;
    }
    return currentNode;
  }

  public shift(): LinkedListNode<T> {
    if (!this.head) return undefined;

    const returnedHead = this.head;

    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      // last element shifted, reset list
      this.tail = null;
      this.head = null;
    }
    return returnedHead;
  }

  public unshift(val: T): LinkedListNode<T> {
    const node = new LinkedListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }

    this.length++;

    return this.head;
  }

  public get(position: number): LinkedListNode<T> {
    let currentNode = this.head;
    let i = 0;
    if (position < 0 || position >= this.length) return null;
    while (i !== position) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  public set(position: number, val: T): boolean {
    const node = this.get(position);
    if (!node) return false;
    node.data = val;
    return true;
  }

  public insert(position: number, val: T) {
    if (position === 0) return !!this.unshift(val);
    else if (position === this.length - 1) return !!this.push(val);
    else {
      const prevNode = this.get(position - 1);
      if (!prevNode) return false;
      const nextNode = prevNode.next;
      const newNode = new LinkedListNode(val);
      prevNode.next = newNode;
      newNode.next = nextNode;
    }

    this.length++;
    return true;
  }

  public remove(position: number) {
    if (position === 0) return this.shift();
    else if (position === this.length - 1) return this.pop();
    else {
      const prevNode = this.get(position - 1);
      if (!prevNode) return false;
      const thisNode = this.get(position);
      prevNode.next = thisNode.next;
      this.length--;
      return thisNode;
    }
  }

  public reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
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

  public display() {
    const result = [];

    let node = this.head;

    while (node) {
      result.push(node.data);
      node = node.next;
    }

    return result;
  }
}
