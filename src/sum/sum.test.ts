import sum from "./index";

describe("Sum valores", () => {
  test("Suma dos números", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("Suma de números negativos", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test("Suma de números positivos", () => {
    expect(sum(2, 5)).toBe(7);
  });

  test("Suma de números decimais", () => {
    expect(sum(2.5, 3.5)).toBe(6);
  });
});
