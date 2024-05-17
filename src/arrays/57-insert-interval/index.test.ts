import insert from "./index";

describe("57. Insert Interval", () => {
  test("case 1", () => {
    const res: number[][] = insert([[1,3],[6,9]], [2, 5]);
    expect(res).toEqual([[1, 5], [6, 9]]);
  });

  test("case 2", () => {
    const res: number[][] = insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]);
    expect(res).toEqual([[1,2],[3,10],[12,16]]);
  });

  test("case 3", () => {
    const res: number[][] = insert([], [5,7]);
    expect(res).toEqual([[5, 7]]);
  });
  
  test("case 4", () => {
    const res: number[][] = insert([[1,2]], [5,7]);
    expect(res).toEqual([[1,2], [5, 7]]);
  });
  
  test("case 5", () => {
    const res: number[][] = insert([[5,7]], [1,2]);
    expect(res).toEqual([[1,2], [5, 7]]);
  });
});
