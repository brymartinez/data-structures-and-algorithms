import { LinkedList, LinkedListNode } from './linked-list';

export class DoublyLinkedListNode<T = any> extends LinkedListNode<T> {
  prev: DoublyLinkedListNode<T> = null;
  next: DoublyLinkedListNode<T> = null;
}

export class DoublyLinkedList<T = any> extends LinkedList<T> {
  head: DoublyLinkedListNode<T>;
  tail: DoublyLinkedListNode<T>;
  length: number;
  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public override push(val: T): DoublyLinkedListNode<T> {
    const node = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
    return node;
  }

  public override pop(): DoublyLinkedListNode<T> {
    if (!this.head) return undefined;

    const lastNode = this.tail;

    this.tail = lastNode.prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // last element popped, reset list
      this.head = null;
    }

    return lastNode;
  }

  public override shift(): DoublyLinkedListNode<T> {
    if (!this.head) return undefined;

    const firstNode = this.head;
    const newHead = this.head.next;

    this.length--;
    if (this.length === 0) {
      // last element shifted, reset list
      this.tail = null;
      this.head = null;
    } else {
      newHead.prev = null;
      this.head = newHead;
      this.head.prev = null;
    }
    return firstNode;
  }

  public override unshift(val: T): DoublyLinkedListNode<T> {
    const node = new DoublyLinkedListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      oldHead.prev = node;
      this.head = node;
      this.head.next = oldHead;
    }

    this.length++;

    return this.head;
  }

  public override get(position: number): DoublyLinkedListNode<T> {
    if (position < 0 || position >= this.length) return null;

    const halfLength = this.length / 2;

    let i: number;
    let currentNode: DoublyLinkedListNode<T>;

    if (halfLength > position) {
      i = 0;
      currentNode = this.head;
      while (i !== position) {
        currentNode = currentNode.next;
        i++;
      }
    } else {
      i = this.length - 1;
      currentNode = this.tail;
      while (i !== position) {
        currentNode = currentNode.prev;
        i--;
      }
    }

    return currentNode;
  }

  public override insert(position: number, val: T) {
    if (position === 0) return !!this.unshift(val);
    else if (position === this.length) return !!this.push(val);
    else {
      const prevNode = this.get(position - 1);
      if (!prevNode) return false;
      const nextNode = prevNode.next;
      const newNode = new DoublyLinkedListNode(val);
      prevNode.next = newNode;
      newNode.next = nextNode;
      newNode.prev = prevNode;
      nextNode.prev = newNode;
    }

    this.length++;
    return true;
  }

  public override remove(position: number) {
    if (position === 0) return this.shift();
    else if (position === this.length - 1) return this.pop();
    else {
      const removedNode = this.get(position);
      if (!removedNode) return false;
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      this.length--;
      return removedNode;
    }
  }
}
