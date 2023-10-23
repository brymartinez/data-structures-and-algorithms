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

  display() {}

  insertStart(data: T) {
    const node = new DoublyLinkedListNode(data);
    node.next = this.head;
    node.prev = null;
    this.head.prev = node;
    this.head = node;
  }

  insertEnd(data: T) {
    const node = new DoublyLinkedListNode(data);
    let finalNode = this.head.next;
    while (finalNode.next) {
      finalNode = finalNode.next;
      node.prev = finalNode;
    }
    finalNode.next = node;
  }
}
