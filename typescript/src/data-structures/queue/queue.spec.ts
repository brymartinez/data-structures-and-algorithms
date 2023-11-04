import { Queue } from './queue';

describe('Queue', () => {
  it('should create queue', () => {
    expect(new Queue(5)).toBeDefined();
  });
  it('should enqueue and dequeue', () => {
    const queue = new Queue(2);

    expect(queue.enqueue(1)).toStrictEqual(undefined);

    queue.enqueue(2);

    expect(queue.dequeue()).toStrictEqual(1);
    expect(queue.peek()).toStrictEqual(2);
    expect(queue.dequeue()).toStrictEqual(2);
  });
  it('should throw on full queue', () => {
    const queue = new Queue(2);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(() => queue.enqueue(3)).toThrowError(/Queue is already full./);
  });
  it('should throw on empty queue', () => {
    const queue = new Queue(2);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();

    expect(() => queue.dequeue()).toThrowError(/Queue is already empty./);
  });
});
