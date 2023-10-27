import { LinkedList, LinkedListNode } from './linked-list';

describe('LinkedList', () => {
  describe('push', () => {
    it('should push on empty list', () => {
      const list = new LinkedList();
      list.push(1);

      expect(list.head.data).toStrictEqual(1);
      expect(list.tail.data).toStrictEqual(1);
    });

    it('should push on existing list', () => {
      const list = new LinkedList();
      list.push(1);
      list.push(2);

      expect(list.head.data).toStrictEqual(1);
      expect(list.tail.data).toStrictEqual(2);
    });
  });
  describe('pop', () => {
    it('should pop', () => {
      const list = new LinkedList();
      const node1 = list.push(1);
      const node2 = list.push(2);
      const node3 = list.push(3);

      expect(list.pop()).toStrictEqual(node3);
      expect(list.pop()).toStrictEqual(node2);
      expect(list.pop()).toStrictEqual(node1);
      expect(list.pop()).toStrictEqual(undefined);
    });
  });
  describe('shift', () => {
    it('should shift', () => {
      const list = new LinkedList();
      const node1 = list.push(1);
      const node2 = list.push(2);
      const node3 = list.push(3);

      expect(list.shift()).toStrictEqual(node1);
      expect(list.shift()).toStrictEqual(node2);
      expect(list.shift()).toStrictEqual(node3);
      expect(list.shift()).toStrictEqual(undefined);
    });
  });
  describe('unshift', () => {
    it('should unshift', () => {
      const list = new LinkedList();

      expect(list.unshift(1).data).toStrictEqual(1);
      expect(list.unshift(2).data).toStrictEqual(2);
      expect(list.unshift(3).data).toStrictEqual(3);
    });
  });
  describe('get', () => {
    it('should get', () => {
      const list = new LinkedList();
      list.push(1);
      list.push(2);
      const node3 = list.push(3);

      expect(list.get(2)).toStrictEqual(node3);
      expect(list.get(3)).toStrictEqual(null);
    });
  });
  describe('set', () => {
    it('should set', () => {
      const list = new LinkedList();
      list.push(1);
      list.push(2);
      const node3 = list.push(3);

      expect(list.set(2, 4)).toStrictEqual(true);
      expect(node3.data).toStrictEqual(4);
      expect(list.set(3, 5)).toStrictEqual(false);
    });
  });
  describe('insert', () => {
    it('should insert', () => {
      const list = new LinkedList();
      list.push(1);
      list.push(2);
      const node3 = list.push(3);

      expect(list.insert(3, 4)).toStrictEqual(true); // push
      expect(node3.next.data).toStrictEqual(4);
      expect(node3.next.next).toStrictEqual(null);
      expect(list.insert(0, 0)).toStrictEqual(true); // unshift
      expect(list.get(0).data).toStrictEqual(0);
      expect(list.insert(1, 0.5)).toStrictEqual(true); // normal
      expect(list.head.next.data).toStrictEqual(0.5);
      expect(list.length).toStrictEqual(6);
    });
  });

  describe('remove', () => {
    it('should remove', () => {
      const list = new LinkedList();
      const node1 = list.push(1);
      list.push(2);
      const node3 = list.push(3);
      list.push(4);
      const node5 = list.push(5);

      expect(list.remove(0)).toStrictEqual(node1); // shift
      expect(list.remove(3)).toStrictEqual(node5); // pop
      expect(list.remove(1)).toStrictEqual(node3); // normal
      expect(list.head.data).toStrictEqual(2);
      expect(list.head.next.data).toStrictEqual(4);
      expect(list.length).toStrictEqual(2);
    });
  });
  describe('reverse', () => {
    it('should reverse', () => {
      const list = new LinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);

      expect(list.reverse()).toBeTruthy();
      expect(list.display()).toStrictEqual([5, 4, 3, 2, 1]);
    });
  });

  describe('sort', () => {
    it('should sort in ascending order', () => {
      const list = new LinkedList();
      list.unshift(1);
      list.unshift(2);
      list.unshift(3);
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
    list.unshift(1);
    list.unshift(2);
    list.unshift(3);
    it('should return true if found', () => {
      expect(list.get(2)).toBeTruthy();
    });
    it('should return false if not found', () => {
      expect(list.get(4)).toBeFalsy();
    });
  });
});
