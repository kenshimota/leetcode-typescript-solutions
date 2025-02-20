import plusOne from ".";

describe("66. Plus One", () => {
  test("case 1", () => {
    const digits = [1, 2, 3];
    const res = plusOne(digits);
    expect(res).toEqual([1, 2, 4]);
  });

  test("case 2", () => {
    const digits = [9, 9, 9];
    const res = plusOne(digits);
    expect(res).toEqual([1, 0, 0, 0]);
  });

  test("case 3", () => {
    const digits = [0];
    const res = plusOne(digits);
    expect(res).toEqual([1]);
  });

  test("case 4", () => {
    const digits = [8, 9, 9];
    const res = plusOne(digits);
    expect(res).toEqual([9, 0, 0]);
  });

  test("case 5", () => {
    const digits = [1, 0, 9];
    const res = plusOne(digits);
    expect(res).toEqual([1, 1, 0]);
  });
});
