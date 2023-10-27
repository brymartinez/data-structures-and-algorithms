import { TreeNode, Tree } from './tree';
import { height, isFull, isPerfect } from './tree-helpers';

describe('Tree', () => {
  describe('inorder', () => {
    it('should traverse inorder', () => {
      const root = new TreeNode(1);
      const tree = new Tree(root);
      tree.root.left = new TreeNode(12);
      tree.root.right = new TreeNode(9);
      tree.root.left.left = new TreeNode(5);
      tree.root.left.right = new TreeNode(6);

      // expect(tree.inorder(tree.root)).toBeTruthy();
      expect(tree.postorder(tree.root)).toBeTruthy();
    });
  });
  describe('helpers', () => {
    describe('isFull', () => {
      it('should return true', () => {
        const root = new TreeNode(1);
        const tree = new Tree(root);
        tree.root.left = new TreeNode(2);
        tree.root.right = new TreeNode(3);

        expect(isFull(tree.root)).toBe(true);
        tree.root.left.left = new TreeNode(4);
        expect(isFull(tree.root)).toBe(false);
      });
    });
    describe('isPerfect', () => {
      it('should return true', () => {
        const root = new TreeNode(1);
        const tree = new Tree(root);
        tree.root.left = new TreeNode(2);
        tree.root.right = new TreeNode(3);

        expect(isPerfect(tree.root, height(tree.root))).toBe(true);
        tree.root.left.left = new TreeNode(4);
        expect(isFull(tree.root)).toBe(false);
      });
    });
  });
});
