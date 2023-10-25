import { LinkedList, LinkedListNode } from './linked-list';

export class DoublyLinkedListNode<T = any> extends LinkedListNode<T> {
  prev: DoublyLinkedListNode<T>;
  next: DoublyLinkedListNode<T> = null;
}

export class DoublyLinkedList<T = any> extends LinkedList<T> {
  private prev: DoublyLinkedListNode<T>;
  head: DoublyLinkedListNode<T> = null;
  constructor(head: DoublyLinkedListNode<T> = null) {
    super(head);
    this.head = head;
    this.prev = null;
  }

  display(): T[] {
    const result = [];

    let node = this.head;

    while (node) {
      result.push(node.data);
      node = node.next;
    }

    return result;
  }

  insertStart(data: T) {
    const node = new DoublyLinkedListNode(data);
    node.next = this.head;
    node.prev = null;

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;
    return node;
  }

  insertAfter(prevNode: DoublyLinkedListNode, data: T) {
    if (!prevNode) {
      throw new Error('Previous node cannot be null.');
    }

    const node = new DoublyLinkedListNode(data);

    node.next = prevNode.next;
    prevNode.next = node;
    node.prev = prevNode;

    if (node.next !== null) {
      node.next.prev = node;
    }

    return node;
  }

  insertEnd(data: T) {
    const node = new DoublyLinkedListNode(data);

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

  delete(node: DoublyLinkedListNode) {
    if (node.prev === null) {
      // first node
      node.next.prev = null;
      this.head = node.next;
    } else if (node.next && node.prev) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    } else if (node.next === null) {
      node.prev.next = null;
    }
  }

  search(element: T): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === element) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  sort() {
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
}
