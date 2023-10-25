import { CircularLinkedList } from './circular-linked-list';
import { LinkedListNode } from './linked-list';

describe('CircularLinkedList', () => {
  describe('insertStart', () => {
    it('should insert', () => {
      const node1 = new LinkedListNode(1);
      const list = new CircularLinkedList(node1);
      list.insertStart(2);

      expect(list.display()).toStrictEqual([2, 1]);

      list.insertStart(3);

      expect(list.display()).toStrictEqual([3, 2, 1]);
    });
  });
});
