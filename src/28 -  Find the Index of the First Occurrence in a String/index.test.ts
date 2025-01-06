import strStr from ".";

describe("28. Find the Index of the First Occurrence in a String", () => {
    test("case 1", () => {
        expect(strStr("sadbutsad", "sad")).toBe(0);
    });

    test("case 2", () => {
        expect(strStr("leetcode", "leeto")).toBe(-1);
    });

    test("case 3", () => {
        expect(strStr("mississippi", "issipi")).toBe(-1);
    });

    test("case 4", () => {
        expect(strStr("mississippi", "issip")).toBe(4);
    });

    test("case 5", () => {
        expect(strStr("aaaaaaaaaa", "aaaaaab")).toBe(-1);
    });

    test("case 6", () => {
        expect(strStr("mississippi", "issi")).toBe(1);
    });
});