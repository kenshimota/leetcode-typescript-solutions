import moveZeroes from ".";

describe("283. Move Zeroes", () => {
    test("case 1", () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test("case 2", () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test("case 3", () => {
        const nums = [1, 2, 3, 4, 0, 0, 0, 5, 6];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 4, 5, 6, 0, 0, 0]);
    });
});