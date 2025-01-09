import repeatedSubstringPattern from ".";


describe("459. Repeated Substring Pattern", () => {
    test("case 1", () => {
        expect(repeatedSubstringPattern("abab")).toBe(true);
    });

    test("case 2", () => {
        expect(repeatedSubstringPattern("aba")).toBe(false);
    });

    test("case 3", () => {
        expect(repeatedSubstringPattern("abcabcabcabc")).toBe(true);
    });

    test("case 4", () => {
        expect(repeatedSubstringPattern("a")).toBe(false);
    });

    test("case 5", () => {
        expect(repeatedSubstringPattern("bb")).toBe(true);
    });

    test("case 6", () => {
        expect(repeatedSubstringPattern("abac")).toBe(false);
    });
});