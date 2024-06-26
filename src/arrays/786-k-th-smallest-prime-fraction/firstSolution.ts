/**
 * 786. K-th Smallest Prime Fraction
 * 
 * You are given a sorted integer array arr containing 1 and prime numbers, 
 * where all the integers of arr are unique. You are also given an integer k.
 * For every i and j where 0 <= i < j < arr.length, we consider 
 * the fraction arr[i] / arr[j].
 * 
 * Return the kth smallest fraction considered. 
 * Return your answer as an array of integers of size 2, 
 * where answer[0] == arr[i] and answer[1] == arr[j].
 * 
 * Example 1:
 * Input: arr = [1,2,3,5], k = 3
 * Output: [2,5]
 * Explanation: The fractions to be considered in sorted order are:
 * 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
 * The third fraction is 2/5.
 * 
 * 
 * Example 2:
 * Input: arr = [1,7], k = 1
 * Output: [1,7]
 * 
 * Time Space: O(n)
 * Space Complexity: O(n)
 */

interface ItemNums {
    amount: number;
    nums: number[];
};

function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    const newArr: ItemNums[] = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++){
            newArr.push({ 
                amount: arr[i] / arr[j], 
                nums: [arr[i], arr[j]] 
            });
        }
    }

    const sorted = newArr.sort((a, b) => a.amount - b.amount);
    return sorted[(k - 1) % sorted.length].nums;
};

export default kthSmallestPrimeFraction;