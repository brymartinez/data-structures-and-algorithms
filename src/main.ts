import { Heap } from './data-structures/heap/heap';
import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from './data-structures/linked-list/doubly-linked-list';
import {
  LinkedListNode,
  LinkedList,
} from './data-structures/linked-list/linked-list';
import { Queue } from './data-structures/queue/queue';
import { Stack } from './data-structures/stack/stack';

(async () => {
  // Stack example - Reversing a word
  const word = 'Hello World';
  const stack = new Stack<string>(word.length);

  word.split('').forEach((letter) => {
    stack.push(letter);
  });

  const reversedString: string[] = [];

  for (let i = 0; i < word.length; i++) {
    reversedString.push(stack.pop());
  }

  console.log(reversedString.join('')); // should be dlroW olleH
})();

(async () => {
  // Queue example - Call center
  const queue = new Queue(3);

  queue.enqueue('first');
  queue.enqueue('second');
  queue.enqueue('third');

  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
})();

(async () => {
  // Heap example
  const heap = new Heap();
  heap.insert(3);
  heap.insert(9);
  heap.insert(2);
  heap.insert(1);
  heap.insert(4);
  heap.insert(5);
  heap.display();
  heap.insert(7);
})();

(async () => {
  // Linked List example

  const node1 = new LinkedListNode(1);
  const node2 = new LinkedListNode(2);
  const node3 = new LinkedListNode(3);

  node1.next = node2;
  node2.next = node3;

  const linkedList = new LinkedList(node1);
  console.log(linkedList.head.next.data); // 2
  const node4 = new LinkedListNode(4);

  node3.next = node4;

  console.log(linkedList.head.next.next.next.data); // 4

  const dllnode1 = new DoublyLinkedListNode(1);
  const dllnode2 = new DoublyLinkedListNode(2);
  const dllnode3 = new DoublyLinkedListNode(3);

  dllnode1.next = dllnode2;
  dllnode2.prev = dllnode1;
  dllnode2.next = dllnode3;
  dllnode3.next = null;

  const dlList = new DoublyLinkedList(dllnode1);
  console.log(dlList.head.next.prev.data); // 1

  const dllnode0 = dlList.insertStart(0);
  console.log(dlList.head.data); // 0
  console.log(dlList.head.next.data); // 1
  console.log(dlList.head.prev); // null

  const dllnode4 = dlList.insertEnd(4);
  console.log(dlList.display());
  const dllnode25 = dlList.insertAfter(dllnode2, 2.5);
  console.log(dlList.display());
  dlList.delete(dllnode0);
  console.log(dlList.display());
  dlList.delete(dllnode4);
  console.log(dlList.display());
  dlList.delete(dllnode25);
  console.log(dlList.display());
})();
