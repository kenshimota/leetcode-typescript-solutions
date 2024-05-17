import { BinaryTree } from "../../utils/BinaryTree";

/**
 * 1325. Delete Leaves With a Given Value
 *
 * Given a binary tree root and an integer target,
 * delete all the leaf nodes with value target.
 *
 * Note that once you delete a leaf node with value target,
 * if its parent node becomes a leaf node and has the value target,
 * it should also be deleted (you need to continue doing that until you cannot).
 *
 * Example 1:
 *
 *          Input            Output
 *            |                 |
 *
 *            1                 1
 *          /   \                \
 *         2     3    --->        3
 *        /     / \                \
 *       2     2   4                4
 *
 * Input: root = [1,2,3,2,null,2,4], target = 2
 * Output: [1,null,3,null,4]
 * Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left).
 * After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
 */
type TreeNode = BinaryTree | null;

function removeLeafNodes(root: TreeNode, target: number): TreeNode {
  if (!root) {
    return null;
  }

  const stack: BinaryTree[] = [];
  const mapParents: Map<BinaryTree, BinaryTree> = new Map();

  if (root) {
    root = root as BinaryTree;
    stack.push(root);
  }

  while (stack.length > 0) {
    const node: BinaryTree = stack.pop()!;

    if (node.left) {
      stack.push(node.left);
      mapParents.set(node.left, node);
    }

    if (node.right) {
      stack.push(node.right);
      mapParents.set(node.right, node);
    }

    if (node.left || node.right || node.val !== target) {
      continue;
    }

    let current = node;

    while (
      current &&
      !current.right &&
      !current.left &&
      current.val === target
    ) {
      let parent = mapParents.get(current)!;

      if (!parent) {
        current = parent;
        continue;
      }

      if (parent.left == current) {
        parent.left = null;
      } else if (parent.right == current) {
        parent.right = null;
      }

      current = mapParents.get(current)!;
    }
  }

  if (root && root.val === target && !root.left && !root.right) {
    return null;
  }

  return root;
}

export default removeLeafNodes;
