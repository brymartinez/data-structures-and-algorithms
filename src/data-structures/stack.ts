export class Stack<T = any> {
  private arr: T[];
  private top = -1;
  private capacity: number;

  constructor(size: number) {
    this.arr = new Array<T>(size);
    this.capacity = size;
  }

  public push(element: T) {
    if (!this.isFull()) {
      this.top++;
      this.arr[this.top] = element;
    } else {
      throw new Error('Stack is already full.');
    }
  }

  public pop() {
    if (!this.isEmpty()) {
      const value = this.arr[this.top];
      this.top--;

      return value;
    } else {
      throw new Error('Stack is already empty.');
    }
  }

  public isEmpty() {
    return this.top === -1;
  }

  public isFull() {
    return this.top === this.capacity - 1;
  }

  public peek() {
    return this.arr[this.top];
  }

  public get size() {
    return this.top + 1;
  }
}
