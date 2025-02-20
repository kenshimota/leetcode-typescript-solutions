import toLowerCase from ".";

describe("To Lower Case", () => {
  test("case 1", () => {
    const res: string = toLowerCase("Hello");
    expect(res).toBe("hello");
  });

  test("case 2", () => {
    const res: string = toLowerCase("here");
    expect(res).toBe("here");
  });

  test("case 3", () => {
    const res: string = toLowerCase("LOVELY");
    expect(res).toBe("lovely");
  });
});
