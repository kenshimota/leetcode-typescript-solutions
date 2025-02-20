function signFunc(x: number): number {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  }
  return 0;
}

function arraySign(nums: number[]): number {
  const product: number = nums.reduce((prev, curr) => prev * curr, 1);
  return signFunc(product);
}

export default arraySign;
