import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
  let TREE: BinarySearchTree;
  beforeAll(() => {
    TREE = new BinarySearchTree();
    TREE.insert(10);
    TREE.insert(6);
    TREE.insert(3);
    TREE.insert(8);
    TREE.insert(15);
    TREE.insert(20);
  });
  describe('insert', () => {
    it('should insert', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);

      expect(tree.root.value).toStrictEqual(10);
      tree.insert(6);
      expect(tree.root.left.value).toStrictEqual(6);
      tree.insert(3);
      expect(tree.root.left.left.value).toStrictEqual(3);
      tree.insert(8);
      expect(tree.root.left.right.value).toStrictEqual(8);
      tree.insert(15);
      expect(tree.root.right.value).toStrictEqual(15);
      tree.insert(20);
      expect(tree.root.right.right.value).toStrictEqual(20);

      expect(() => tree.insert(13)).not.toThrow();
      expect(tree.root.right.left.value).toStrictEqual(13);
    });
  });
  describe('find', () => {
    it('should find', () => {
      const tree = new BinarySearchTree();
      expect(tree.find(10)?.value).toStrictEqual(undefined);

      tree.insert(10);
      tree.insert(6);
      tree.insert(3);
      tree.insert(8);
      tree.insert(15);
      tree.insert(20);

      expect(tree.find(10)?.value).toStrictEqual(10);
      expect(tree.find(20)?.value).toStrictEqual(20);
      expect(tree.find(3)?.value).toStrictEqual(3);
      expect(tree.find(13)?.value).toStrictEqual(undefined);
    });
  });
  describe('bfs', () => {
    it('should do bfs', () => {
      expect(TREE.bfs()).toStrictEqual([10, 6, 15, 3, 8, 20]);
    });
  });
  describe('dfs', () => {
    describe('preOrder', () => {
      it('should do preOrder', () => {
        expect(TREE.preOrder()).toStrictEqual([10, 6, 3, 8, 15, 20]);
      });
    });
    describe('postOrder', () => {
      it('should do postOrder', () => {
        expect(TREE.postOrder()).toStrictEqual([3, 8, 6, 20, 15, 10]);
      });
    });
    describe('inOrder', () => {
      it('should do inOrder', () => {
        expect(TREE.inOrder()).toStrictEqual([3, 6, 8, 10, 15, 20]);
      });
    });
  });
});
