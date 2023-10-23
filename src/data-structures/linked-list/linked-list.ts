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
}
