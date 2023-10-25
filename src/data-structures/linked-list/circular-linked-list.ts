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
    this.head.next = head;
  }

  public override display(): T[] {
    const result = [];

    let node = this.head;

    while (node && node.next !== this.head) {
      console.log(node);
      result.push(node.data);
      node = node.next;
      console.log(node);
      console.log(this.head);
    }
    result.push(node.data);

    return result;
  }

  public override insertStart(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);

    if (this.head !== null) {
      node.next = this.head;
    }

    const lastNode = this.getLastNode();
    this.head = node;
    lastNode.next = node;
    return node;
  }

  private getLastNode(): LinkedListNode<T> {
    let currentNode = this.head;

    while (currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }

    return currentNode.next;
  }
}
