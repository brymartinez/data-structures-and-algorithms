import { Stack } from './data-structures/stack';

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
