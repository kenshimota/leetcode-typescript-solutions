import lengthOfLastWord from ".";

describe("Length of Last Word", () => {
  test("case 1", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  test("case 2", () => {
    expect(lengthOfLastWord("   hello   world   ")).toBe(5);
  });

  test("case 3", () => {
    expect(lengthOfLastWord("a")).toBe(1);
  });

  test("case 4", () => {
    expect(lengthOfLastWord("")).toBe(0);
  });
});
