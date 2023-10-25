import { LinkedList, LinkedListNode } from './linked-list';

export class DoublyLinkedListNode<T = any> extends LinkedListNode<T> {
  prev: DoublyLinkedListNode<T> = null;
  next: DoublyLinkedListNode<T> = null;
}

export class DoublyLinkedList<T = any> extends LinkedList<T> {
  head: DoublyLinkedListNode<T> = null;
  constructor(head: DoublyLinkedListNode<T> = null) {
    super(head);
    this.head = head;
  }

  public override insertStart(data: T): DoublyLinkedListNode<T> {
    const node = new DoublyLinkedListNode(data);
    node.next = this.head;
    node.prev = null;

    if (this.head !== null) {
      this.head.prev = node;
    }

    this.head = node;
    return node;
  }

  public override insertAfter(
    prevNode: DoublyLinkedListNode<T>,
    data: T,
  ): DoublyLinkedListNode<T> {
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

  public override insertEnd(data: T): DoublyLinkedListNode<T> {
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
    node.prev = finalNode;
    return node;
  }

  public override delete(node: DoublyLinkedListNode) {
    if (node.prev === null) {
      // first node
      node.next.prev = null;
      this.head = node.next;
    } else if (node.next && node.prev) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    } else if (node.next === null) {
      // last node
      node.prev.next = null;
    }
  }
}
