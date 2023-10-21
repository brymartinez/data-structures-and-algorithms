import { Queue } from './queue';

export class CircularQueue<T> extends Queue<T> {
  constructor(size: number) {
    super(size);
  }

  public override enqueue(element: T): void {
    if (!this.isFull()) {
      if (this.front == -1) {
        this.front = 0;
      }

      this.rear = (this.rear + 1) % this.capacity;
      this.arr[this.rear] = element;
      console.log(this.arr);
    }
  }

  public override dequeue() {
    if (!this.isEmpty()) {
      const value = this.arr[this.front];

      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.capacity;
      }

      return value;
    }
  }

  public override isFull() {
    return (
      (this.front === 0 && this.rear === this.capacity - 1) ||
      this.front === this.rear + 1
    );
  }
}
