import { CircularLinkedList } from './circular-linked-list';
import { LinkedListNode } from './linked-list';

describe('CircularLinkedList', () => {
  describe('insertStart', () => {
    it('should insert', () => {
      const list = new CircularLinkedList();

      list.insertStart(1);
      expect(list.display()).toStrictEqual([1]);

      list.insertStart(2);
      expect(list.display()).toStrictEqual([2, 1]);

      list.insertStart(3);
      expect(list.display()).toStrictEqual([3, 2, 1]);
    });
  });
  describe('insertEnd', () => {
    it('should insert', () => {
      const list = new CircularLinkedList();

      list.insertEnd(1);
      expect(list.display()).toStrictEqual([1]);

      list.insertEnd(2);
      expect(list.display()).toStrictEqual([1, 2]);

      list.insertEnd(3);
      expect(list.display()).toStrictEqual([1, 2, 3]);
    });
  });
  describe('insertAfter', () => {
    it('should insert', () => {
      const node1 = new LinkedListNode(1);
      const list = new CircularLinkedList(node1);

      list.insertAfter(node1, 3);
      expect(list.display()).toStrictEqual([1, 3]);

      list.insertAfter(node1, 2);
      expect(list.display()).toStrictEqual([1, 2, 3]);
    });
  });
});
