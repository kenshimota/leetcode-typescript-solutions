import findFarmland from "./find-all-groups-of-farmland";

describe("1992. Find All Groups of Farmland", () => {

  test("case 1", () => {
    const grid = [
      [1,0,0],
      [0,1,1],
      [0,1,1]
    ];

    const res = [
      [0,0,0,0],
      [1,1,2,2]
    ];

    expect( findFarmland(grid) ).toEqual(res);
  });

});
