import findAnswer from "./index";


describe("1992. Find All Groups of Farmland", () => {

  test("case 1", () => {
    const res: boolean[] = findAnswer(6, [[0,1,4],[0,2,1],[1,3,2],[1,4,3],[1,5,1],[2,3,1],[3,5,3],[4,5,2]]);
    expect(res).toBe([true,true,true,false,true,true,true,false]);
  });

  test("case 2", () => {
    const res: boolean[] = findAnswer(4, [[2,0,1],[0,1,1],[0,3,4],[3,2,2]]);
    expect(res).toBe([true,false,false,true]);
  });
});
