import { LinkedList, LinkedListNode } from './linked-list';

/**
 * Circular
 *
 * @export
 * @class CircularLinkedList
 * @extends {LinkedList<T>}
 * @template T
 */
export class CircularLinkedList<T> extends LinkedList<T> {
  head: LinkedListNode<T> = null;
  constructor(head: LinkedListNode<T> = null) {
    super(head);
    this.head = head;
    if (this.head) {
      this.head.next = head;
    }
  }

  public override display(): T[] {
    const result = [];

    let node = this.head;

    while (node && node.next !== this.head) {
      result.push(node.data);
      node = node.next;
    }
    result.push(node.data);

    return result;
  }

  public override insertStart(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);

    if (this.head === null) {
      this.head = node;
      this.head.next = node;
      return this.head;
    }

    const lastNode = this.getLastNode();
    node.next = this.head;
    this.head = node;
    lastNode.next = this.head;
    return node;
  }

  public override insertAfter(
    prevNode: LinkedListNode<T>,
    data: T,
  ): LinkedListNode<T> {
    if (!prevNode) {
      throw new Error('Previous node cannot be null.');
    }

    const node = new LinkedListNode(data);

    const lastNode = this.getLastNode();

    if (prevNode === lastNode) {
      lastNode.next = node;
      node.next = this.head;
    } else {
      node.next = prevNode.next;
      prevNode.next = node;
    }
    return node;
  }

  public override insertEnd(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);

    if (this.head === null) {
      this.head = node;
      this.head.next = node;
      return this.head;
    }

    const lastNode = this.getLastNode();
    lastNode.next = node;
    node.next = this.head;
    return node;
  }

  private getLastNode(): LinkedListNode<T> {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
