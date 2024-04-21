import validPath from "./index";

describe("Find if path exists in graph", () => {
  test("case 1", () => {
    const res: boolean = validPath(3, [[0,1],[1,2],[2,0]], 0, 1);
    expect(res).toBe(true);
  });

  test("case 2", () => {
    const res: boolean = validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5);
    expect(res).toBe(false);
  });

  test("case 3", () => {
    const res: boolean = validPath(8, [[0,1],[0,2],[3,5],[6,4],[4,3],[7,0],[6,7]], 1, 5);
    expect(res).toBe(true);
  });

  test("case 4", () => {
    const res: boolean = validPath(1, [], 0, 0);
    expect(res).toBe(true);
  });
});
