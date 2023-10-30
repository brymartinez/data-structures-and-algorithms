import { BSTNode, BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
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
});
