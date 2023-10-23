import { Heap } from './heap';

describe('Heap', () => {
  it('should perform heap operations', () => {
    const heap = new Heap();

    heap.insert(3);
    heap.insert(9);
    expect(heap.display()).toStrictEqual([9, 3]);
    heap.insert(2);
    expect(heap.display()).toStrictEqual([9, 3, 2]);
    heap.insert(1);
    expect(heap.display()).toStrictEqual([9, 3, 2, 1]);
    heap.insert(4);
    expect(heap.display()).toStrictEqual([9, 4, 2, 1, 3]);
    heap.insert(5);
    expect(heap.display()).toStrictEqual([9, 4, 5, 1, 3, 2]);
    heap.insert(7);
    expect(heap.display()).toStrictEqual([9, 4, 7, 1, 3, 2, 5]);
    heap.delete(4);
    expect(heap.display()).toStrictEqual([9, 5, 7, 1, 3, 2]);
  });
});
