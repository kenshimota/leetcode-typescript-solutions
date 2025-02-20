import isAnagram from ".";

describe("242. Valid Anagram", () => {
    test("case 1", () => {
        const res: boolean = isAnagram("anagram", "nagaram");
        expect(res).toBe(true);
    });

    test("case 2", () => {
        const res: boolean = isAnagram("rat", "car");
        expect(res).toBe(false);
    });

    test("case 3", () => {
        const res: boolean = isAnagram("a", "a");
        expect(res).toBe(true);
    });

    test("case 4", () => {
        const res: boolean = isAnagram("abc", "cba");
        expect(res).toBe(true);
    });

    test("case 5", () => {
        const res: boolean = isAnagram("hello", "world");
        expect(res).toBe(false);
    });

    test("case 6", () => {
        const res: boolean = isAnagram("ab", "a");
        expect(res).toBe(false);
    });

    test("case 6", () => {
        const res: boolean = isAnagram("a", "ab");
        expect(res).toBe(false);
    });
})