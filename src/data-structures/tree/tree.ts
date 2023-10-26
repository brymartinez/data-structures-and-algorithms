export class TreeNode<T = any> {
  item: T;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(item: T) {
    this.item = item;
  }
}

export class Tree<T = any> {
  root: TreeNode<T>;
  constructor(root?: TreeNode<T>) {
    this.root = root;
  }

  public inorder(node: TreeNode<T>) {
    if (node === null) return;
    if (node.left) this.inorder(node.left);

    console.log(node.item);

    if (node.right) this.inorder(node.right);
  }

  public preorder(node: TreeNode<T>) {
    if (node === null) return;
    console.log(node.item);
    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);
  }

  public postorder(node: TreeNode<T>) {
    if (node === null) return;

    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);

    console.log(node.item);
  }
}
