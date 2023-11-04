import { Queue } from './queue';

export class SimpleQueue<T> extends Queue<T> {
  constructor(size: number) {
    super(size);
  }
}
