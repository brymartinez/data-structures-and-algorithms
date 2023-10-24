import { DoublyLinkedList, DoublyLinkedListNode } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
  it('should perform operations', () => {
    const dllnode1 = new DoublyLinkedListNode(1);
    const dllnode2 = new DoublyLinkedListNode(2);
    const dllnode3 = new DoublyLinkedListNode(3);

    dllnode1.next = dllnode2;
    dllnode2.prev = dllnode1;
    dllnode2.next = dllnode3;
    dllnode3.next = null;

    const dlList = new DoublyLinkedList(dllnode1);
    expect(dlList.head.next.prev.data).toStrictEqual(1);

    const dllnode0 = dlList.insertStart(0);
    expect(dlList.head.data).toStrictEqual(0);
    expect(dlList.head.next.data).toStrictEqual(1);
    expect(dlList.head.prev).toStrictEqual(null);

    const dllnode4 = dlList.insertEnd(4);
    expect(dlList.display()).toStrictEqual([0, 1, 2, 3, 4]);
    const dllnode25 = dlList.insertAfter(dllnode2, 2.5);
    expect(dlList.display()).toStrictEqual([0, 1, 2, 2.5, 3, 4]);
    dlList.delete(dllnode0);
    expect(dlList.display()).toStrictEqual([1, 2, 2.5, 3, 4]);
    dlList.delete(dllnode4);
    expect(dlList.display()).toStrictEqual([1, 2, 2.5, 3]);
    dlList.delete(dllnode25);
    expect(dlList.display()).toStrictEqual([1, 2, 3]);
    expect(dlList.search(2)).toStrictEqual(true);
    expect(dlList.search(2.5)).toStrictEqual(false);
  });
});
