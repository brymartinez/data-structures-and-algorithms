export class Queue<T = any> {
  protected arr: T[];
  protected front = -1;
  protected rear = -1;
  protected capacity: number;

  constructor(size: number) {
    this.arr = new Array<T>(size);
    this.capacity = size;
  }

  public enqueue(element: T) {
    if (!this.isFull()) {
      if (this.front === -1) this.front = 0;
      this.rear++;
      this.arr[this.rear] = element;
    } else {
      throw new Error('Queue is already full.');
    }
  }

  public dequeue(): T {
    if (!this.isEmpty()) {
      const value = this.arr[this.front];
      this.front++;
      if (this.front > this.rear) {
        this.front = -1;
        this.rear = -1;
      }

      return value;
    } else {
      throw new Error('Queue is already empty.');
    }
  }

  public isEmpty() {
    return this.front === -1 && this.rear === -1;
  }

  public isFull() {
    return this.front === 0 && this.rear === this.capacity - 1;
  }

  public peek() {
    return this.arr[this.front];
  }
}
