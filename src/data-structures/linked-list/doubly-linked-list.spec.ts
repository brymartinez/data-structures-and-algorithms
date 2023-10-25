import { DoublyLinkedList, DoublyLinkedListNode } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
  describe('insertStart', () => {
    it('should insert start with zero nodes', () => {
      const dlList = new DoublyLinkedList();

      const dllnode1 = dlList.insertStart(1);

      expect(dllnode1.data).toStrictEqual(1);
      expect(dllnode1.next).toStrictEqual(null);
      expect(dllnode1.prev).toStrictEqual(null);
    });
    it('should insert start with 1 node', () => {
      const dllnode2 = new DoublyLinkedListNode(2);
      const dlList = new DoublyLinkedList(dllnode2);

      const dllnode1 = dlList.insertStart(1);

      expect(dllnode1.data).toStrictEqual(1);
      expect(dllnode1.next).toStrictEqual(dllnode2);
      expect(dllnode1.prev).toStrictEqual(null);
    });
  });
  describe('insertAfter', () => {
    it('should insert as last node', () => {
      const dllnode1 = new DoublyLinkedListNode(1);

      const dlList = new DoublyLinkedList(dllnode1);
      const dllnode2 = dlList.insertAfter(dllnode1, 2);
      expect(dllnode2.data).toStrictEqual(2);
      expect(dllnode2.next).toStrictEqual(null);
      expect(dllnode2.prev).toStrictEqual(dllnode1);
    });
    it('should insert between 2 nodes', () => {
      const dllnode1 = new DoublyLinkedListNode(1);

      const dlList = new DoublyLinkedList(dllnode1);
      const dllnode3 = dlList.insertAfter(dllnode1, 3);
      const dllnode2 = dlList.insertAfter(dllnode1, 2);
      expect(dllnode2.data).toStrictEqual(2);
      expect(dllnode2.next).toStrictEqual(dllnode3);
      expect(dllnode2.prev).toStrictEqual(dllnode1);
    });
    it('should not insert if node is null', () => {
      const dllnode1 = new DoublyLinkedListNode(1);

      const dlList = new DoublyLinkedList(dllnode1);
      expect(() => dlList.insertAfter(null, 2)).toThrowError(
        /Previous node cannot be null./,
      );
    });
  });
  describe('insertEnd', () => {
    it('should insert end with zero nodes', () => {
      const dlList = new DoublyLinkedList();

      const dllnode1 = dlList.insertEnd(1);

      expect(dllnode1.data).toStrictEqual(1);
      expect(dllnode1.next).toStrictEqual(null);
      expect(dllnode1.prev).toStrictEqual(null);
    });
    it('should insert end with > 0 nodes', () => {
      const dllnode1 = new DoublyLinkedListNode(1);
      const dlList = new DoublyLinkedList(dllnode1);

      const dllnode2 = dlList.insertEnd(2);

      expect(dllnode2.data).toStrictEqual(2);
      expect(dllnode2.next).toStrictEqual(null);
      expect(dllnode2.prev).toStrictEqual(dllnode1);
      const dllnode3 = dlList.insertEnd(3);
      expect(dllnode3.data).toStrictEqual(3);
      expect(dllnode3.next).toStrictEqual(null);
      expect(dllnode3.prev).toStrictEqual(dllnode2);
    });
  });
  describe('delete', () => {
    let dlList: DoublyLinkedList;
    let dlnode1: DoublyLinkedListNode<number>;
    let dlnode2: DoublyLinkedListNode<number>;
    let dlnode3: DoublyLinkedListNode<number>;

    beforeEach(() => {
      dlList = new DoublyLinkedList();
      dlnode1 = dlList.insertStart(1);
      dlnode2 = dlList.insertStart(2);
      dlnode3 = dlList.insertStart(3);
    });

    it('should delete last node', () => {
      dlList.delete(dlnode1);
      expect(dlnode2.data).toStrictEqual(2);
      expect(dlnode2.next).toStrictEqual(null);
      expect(dlnode2.prev).toStrictEqual(dlnode3);
    });
    it('should delete first node', () => {
      dlList.delete(dlnode3);
      expect(dlnode2.data).toStrictEqual(2);
      expect(dlnode2.next).toStrictEqual(dlnode1);
      expect(dlnode2.prev).toStrictEqual(null);
    });
    it('should delete middle node', () => {
      dlList.delete(dlnode2);
      expect(dlnode3.data).toStrictEqual(3);
      expect(dlnode3.next).toStrictEqual(dlnode1);
      expect(dlnode3.prev).toStrictEqual(null);
      expect(dlnode1.data).toStrictEqual(1);
      expect(dlnode1.next).toStrictEqual(null);
      expect(dlnode1.prev).toStrictEqual(dlnode3);
    });
  });
});
