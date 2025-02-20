/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let countZero = 0;
    let lastIndex = 0;

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(num === 0){
            countZero += 1;
            continue;
        }

        nums[lastIndex] = nums[i];
        lastIndex += 1;
    }

    for(let j = 0; j < countZero; j++){
        nums[nums.length - j - 1] = 0;
    }
};

export default moveZeroes;