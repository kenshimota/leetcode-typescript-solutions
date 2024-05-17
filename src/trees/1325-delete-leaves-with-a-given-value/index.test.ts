import removeLeafNodes from "./index";
import { BinaryTree, createBinaryTreeFromArray } from "../../utils/BinaryTree";

describe("1325. Delete Leaves With a Given Value", () => {
  test("case 1", () => {
    const root = createBinaryTreeFromArray([1, 2, 3, 2, null, 2, 4]);
    const res: BinaryTree | null = removeLeafNodes(root, 2);
    const resExpect: BinaryTree | null = createBinaryTreeFromArray([
      1,
      null,
      3,
      null,
      null,
      null,
      4,
    ]);

    expect(res).toEqual(resExpect);
  });

  test("case 2", () => {
    const root = createBinaryTreeFromArray([1, 3, 3, 3, 2]);
    const res: BinaryTree | null = removeLeafNodes(root, 3);
    expect(res).toEqual(createBinaryTreeFromArray([1, 3, null, null, 2]));
  });

  test("case 3", () => {
    const root = createBinaryTreeFromArray([1, 2, null, 2, null, 2]);
    const res: BinaryTree | null = removeLeafNodes(root, 2);
    expect(res).toEqual(createBinaryTreeFromArray([1]));
  });

  test("case 4", () => {
    const root = createBinaryTreeFromArray([2, 2, 2, 2]);
    const res: BinaryTree | null = removeLeafNodes(root, 2);
    expect(res).toEqual(createBinaryTreeFromArray([]));
  });

  test("case 5", () => {
    const root = createBinaryTreeFromArray([]);
    const res: BinaryTree | null = removeLeafNodes(root, 2);
    expect(res).toEqual(createBinaryTreeFromArray([]));
  });
});
