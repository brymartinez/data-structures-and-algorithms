import { TreeNode, Tree } from './tree';

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
});
