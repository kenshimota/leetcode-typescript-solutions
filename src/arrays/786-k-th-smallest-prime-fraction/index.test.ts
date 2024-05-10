import kthSmallestPrimeFraction from "./firstSolution";

describe("786. K-th Smallest Prime Fraction", () => {
    test("case 1", () => {
        const res: number[] = kthSmallestPrimeFraction([1, 2, 3, 5], 3);
        expect(res).toEqual([2, 5]);
    });

    test("case 2", () => {
        const res: number[] = kthSmallestPrimeFraction([1, 7], 1);
        expect(res).toEqual([1, 7]);
    });
});
