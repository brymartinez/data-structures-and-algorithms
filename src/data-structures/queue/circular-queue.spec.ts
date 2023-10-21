import { CircularQueue } from './circular-queue';

describe('CircularQueue', () => {
  it('should create queue', () => {
    expect(new CircularQueue(5)).toBeDefined();
  });
  it('should enqueue and dequeue', () => {
    const queue = new CircularQueue(2);

    expect(queue.enqueue(1)).toStrictEqual(undefined);

    queue.enqueue(2);

    expect(queue.dequeue()).toStrictEqual(1);
    expect(queue.peek()).toStrictEqual(2);
    expect(queue.dequeue()).toStrictEqual(2);
  });
  it('should throw on full queue', () => {
    const queue = new CircularQueue(2);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(() => queue.enqueue(3)).toThrowError(/Queue is already full./);
  });
  it('should throw on empty queue', () => {
    const queue = new CircularQueue(2);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();

    expect(() => queue.dequeue()).toThrowError(/Queue is already empty./);
  });
  it('should circle back', () => {
    const queue = new CircularQueue(2);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.enqueue(3);

    expect(queue.dequeue()).toStrictEqual(2);
    expect(queue.dequeue()).toStrictEqual(3);
  });
});
