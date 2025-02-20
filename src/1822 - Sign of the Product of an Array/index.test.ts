import arraySign from ".";

describe("", () => {
  test("case 1", () => {
    const nums = [1, 2, 3, 4, 5];
    expect(arraySign(nums)).toBe(1);
  });

  test("case 2", () => {
    const nums = [-1, -2, -3, -4, -5];
    expect(arraySign(nums)).toBe(-1);
  });

  test("case 3", () => {
    const nums = [0, 1, 2, 3, 4];
    expect(arraySign(nums)).toBe(0);
  });

  test("case 4", () => {
    const nums = [-1, 0, 1];
    expect(arraySign(nums)).toBe(0);
  });
});
