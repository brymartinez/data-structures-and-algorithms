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
    if (node.left) this.inorder(node.left);

    console.log(node.item);

    if (node.right) this.inorder(node.right);
  }
}
