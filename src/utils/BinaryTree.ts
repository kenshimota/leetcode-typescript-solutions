export interface BinaryTree {
  val: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
}

type TreeNode = BinaryTree | null;
type TreeValues = number | null;

export const createBinaryTreeFromArray = function (
  arr: TreeValues[]
): TreeNode {
  const nodes: TreeNode[] = arr.map((n) => {
    if (n === null) {
      return null;
    }
    return { val: n, left: null, right: null };
  });

  for (let i = 0; i < nodes.length; i++) {
    const refLeft = i * 2 + 1;
    const refRight = i * 2 + 2;

    if (!nodes[i]) {
      continue;
    }

    const node: BinaryTree = nodes[i] as BinaryTree;

    if (node !== null && refLeft < nodes.length) {
      node.left = nodes[refLeft] || null;
    }

    if (refRight < nodes.length) {
      node.right = nodes[refRight] || null;
    }
  }

  return nodes[0] || null;
};
