import { CircularQueue } from './data-structures/queue/circular-queue';
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
