import { LinkedList, LinkedListNode } from './linked-list';

describe('LinkedList', () => {
  describe('insertStart', () => {
    it('should insert at head with empty list', () => {
      const list = new LinkedList();
      list.insertStart(2);

      expect(list.display()).toStrictEqual([2]);
    });
    it('should insert at head with existing list', () => {
      const list = new LinkedList();
      list.insertStart(2);
      list.insertStart(1);

      expect(list.display()).toStrictEqual([1, 2]);
    });
  });
  describe('insertAfter', () => {
    it('should insert after head', () => {
      const node1 = new LinkedListNode(1);
      const list = new LinkedList(node1);
      list.insertAfter(node1, 3);

      expect(list.display()).toStrictEqual([1, 3]);
    });
    it('should insert between two nodes', () => {
      const node1 = new LinkedListNode(1);
      const list = new LinkedList(node1);
      list.insertAfter(node1, 3);
      list.insertAfter(node1, 2);

      expect(list.display()).toStrictEqual([1, 2, 3]);
    });
    it('should throw on null prev node', () => {
      const node1 = new LinkedListNode(1);
      const list = new LinkedList(node1);

      expect(() => list.insertAfter(null, 3)).toThrowError(
        /Previous node cannot be null./,
      );
    });
  });
  describe('insertEnd', () => {
    it('should insert after head', () => {
      const node1 = new LinkedListNode(1);
      const list = new LinkedList(node1);
      list.insertEnd(2);

      expect(list.display()).toStrictEqual([1, 2]);
    });
    it('should insert after head with existing list', () => {
      const node1 = new LinkedListNode(1);
      const list = new LinkedList(node1);
      list.insertEnd(2);
      list.insertEnd(3);

      expect(list.display()).toStrictEqual([1, 2, 3]);
    });
    it('should insert at the start when there is no head', () => {
      const list = new LinkedList();
      list.insertEnd(2);

      expect(list.display()).toStrictEqual([2]);
    });
  });
  describe('delete', () => {
    it('should delete nodes', () => {
      const list = new LinkedList();
      const node1 = list.insertStart(1);
      const node2 = list.insertStart(2);
      const node3 = list.insertStart(3);

      list.delete(node2);
      expect(list.display()).toStrictEqual([3, 1]);
      list.delete(node1);
      expect(list.display()).toStrictEqual([3]);
      list.delete(node3);
      expect(list.display()).toStrictEqual([]);
    });
  });
  describe('sort', () => {
    it('should sort in ascending order', () => {
      const list = new LinkedList();
      list.insertStart(1);
      list.insertStart(2);
      list.insertStart(3);
      list.sort();
      expect(list.display()).toStrictEqual([1, 2, 3]);
    });
    it('should not throw on empty list', () => {
      const list = new LinkedList();
      expect(() => list.sort()).not.toThrow();
    });
  });
  describe('search', () => {
    const list = new LinkedList();
    list.insertStart(1);
    list.insertStart(2);
    list.insertStart(3);
    it('should return true if found', () => {
      expect(list.search(2)).toBe(true);
    });
    it('should return false if not found', () => {
      expect(list.search(4)).toBe(false);
    });
  });
});
