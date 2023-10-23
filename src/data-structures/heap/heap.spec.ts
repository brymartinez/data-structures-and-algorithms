import { Heap } from './heap';

describe('Heap', () => {
  it('should create a heap', () => {
    const heap = new Heap();

    heap.insert(4);
    heap.insert(9);
    expect(heap.display()).toStrictEqual([9, 4]);
    heap.insert(3);
    expect(heap.display()).toStrictEqual([9, 4, 3]);
    heap.insert(8);
    expect(heap.display()).toStrictEqual([9, 8, 3, 4]);
  });
});
