import { DoublyLinkedList, DoublyLinkedListNode } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
  describe('push', () => {
    it('should push', () => {
      const list = new DoublyLinkedList();
      list.push(1);

      expect(list.head.data).toStrictEqual(1);
      expect(list.tail.data).toStrictEqual(1);

      list.push(2);
      list.push(3);

      expect(list.head.data).toStrictEqual(1);
      expect(list.tail.data).toStrictEqual(3);
      expect(list.tail.prev.data).toStrictEqual(2);
    });
  });
  describe('pop', () => {
    it('should pop', () => {
      const list = new DoublyLinkedList();
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
      const list = new DoublyLinkedList();
      const node1 = list.push(1);
      const node2 = list.push(2);
      const node3 = list.push(3);

      expect(list.shift()).toStrictEqual(node1);
      expect(node2.prev).toStrictEqual(null);
      expect(node2.next).toStrictEqual(node3);
      expect(list.shift()).toStrictEqual(node2);
      expect(list.shift()).toStrictEqual(node3);
      expect(list.shift()).toStrictEqual(undefined);
    });
  });
  describe('unshift', () => {
    it('should unshift', () => {
      const list = new DoublyLinkedList();

      expect(list.unshift(1).data).toStrictEqual(1);
      expect(list.unshift(2).data).toStrictEqual(2);
      expect(list.head.next.prev.data).toStrictEqual(2);
      expect(list.unshift(3).data).toStrictEqual(3);
    });
  });
  describe('get', () => {
    it('should get', () => {
      const list = new DoublyLinkedList();
      const arr: DoublyLinkedListNode[] = [];
      arr.push(list.push(1));
      arr.push(list.push(2));
      arr.push(list.push(3));
      arr.push(list.push(4));
      arr.push(list.push(5));
      arr.push(list.push(6));
      arr.push(list.push(7));

      expect(list.get(1)).toStrictEqual(arr[1]);
      expect(list.get(4)).toStrictEqual(arr[4]);
      expect(list.get(3)).toStrictEqual(arr[3]);
    });
  });
  describe('insert', () => {
    it('should insert', () => {
      const list = new DoublyLinkedList();
      list.push(1);
      list.push(2);
      const node3 = list.push(3);

      expect(list.insert(3, 4)).toStrictEqual(true); // push
      expect(node3.next.data).toStrictEqual(4);
      expect(node3.next.next).toStrictEqual(null);
      expect(node3.prev.data).toStrictEqual(2);

      expect(list.insert(0, 0)).toStrictEqual(true); // unshift
      expect(list.get(0).data).toStrictEqual(0);
      expect(list.insert(1, 0.5)).toStrictEqual(true); // normal
      expect(list.head.next.data).toStrictEqual(0.5);
      expect(list.head.next.prev.data).toStrictEqual(0);
      expect(list.length).toStrictEqual(6);
    });
  });
  describe('remove', () => {
    it('should remove', () => {
      const list = new DoublyLinkedList();
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
      expect(list.head.next.prev.data).toStrictEqual(2);

      expect(list.length).toStrictEqual(2);
    });
  });
});
