import { Heap } from './data-structures/heap/heap';
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
  // Queue example - Call center
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
