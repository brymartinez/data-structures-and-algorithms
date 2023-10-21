import { Stack } from './stack';

describe('Stack', () => {
  it('should initialize stack', () => {
    expect(new Stack(4)).toBeDefined();
  });
  it('should return empty size', () => {
    expect(new Stack(4).size).toStrictEqual(0);
  });
  it('should return proper size', () => {
    const stack = new Stack<number>(4);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toStrictEqual(3);

    stack.pop();

    expect(stack.size).toStrictEqual(2);
    expect(stack.peek()).toStrictEqual(2);
  });
  it('should fail on pop if stack is empty', () => {
    const stack = new Stack<number>(2);

    stack.push(1);
    stack.pop();

    expect(() => stack.pop()).toThrowError(/Stack is already empty./);
  });
  it('should fail on push if stack is full', () => {
    const stack = new Stack<number>(2);

    stack.push(1);
    stack.push(2);

    expect(() => stack.push(3)).toThrowError(/Stack is already full./);
  });
});
