import findTheDifference from ".";


describe("384. Find the Difference", () => {
    test("case 1", () => {
        const res: string = findTheDifference("abcd", "abcde");
        expect(res).toBe("e");
    });

    test("case 2", () => {
        const res: string = findTheDifference("a", "aa");
        expect(res).toBe("a");
    });

    test("case 3", () => {
        const res: string = findTheDifference("ae", "aea");
        expect(res).toBe("a");
    });

    test("case 4",() => {
        const res: string = findTheDifference("leetcode", "tcodeleet");
        expect(res).toBe("t");
    });

    test("case 5", () => {
        const res: string = findTheDifference("rabbbit", "rabbit");
        expect(res).toBe("b");
    });

    test("case 6", () => {
        const res: string = findTheDifference("anagram", "nagarma");
        expect(res).toBe("");
    });
});