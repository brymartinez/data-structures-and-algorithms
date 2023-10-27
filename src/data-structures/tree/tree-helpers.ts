import { Tree, TreeNode } from './tree';

export const isFull = (node: TreeNode) => {
  if (node === null) {
    return true;
  }

  if (node?.left === undefined && node?.right === undefined) {
    return true;
  }

  if (node?.left !== undefined && node?.right !== undefined) {
    return isFull(node.left) && isFull(node.right);
  }

  return false;
};

export const height = (node: TreeNode) => {
  let h = 0;
  while (node !== null) {
    h++;
    node = node?.left; // no need to check right
  }
  return h;
};

export const isPerfect = (node: TreeNode, height: number, level = 0) => {
  if (node === null) {
    return true;
  }

  if (node?.left === undefined || node?.right === undefined) {
    return false;
  } else if (node?.left !== undefined && node?.right === undefined) {
    // use height to determine if it is a perfect binary tree
    return height === level + 1;
  }

  return (
    isPerfect(node?.left, height, level + 1) &&
    isPerfect(node?.right, height, level + 1)
  );
};
