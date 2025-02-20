function plusOne(digits: number[]): number[] {
  digits = digits.reverse();

  digits[0] += 1;

  for (let i = 0; i < digits.length && 10 <= digits[i]; i++) {
    const aux: number = digits[i] % 10;
    const redux: number = (digits[i] - aux) / 10;
    digits[i] = aux;

    if (redux === 0) {
      continue;
    }

    digits[i + 1] = (digits[i + 1] || 0) + redux;
  }

  return digits.reverse();
}

export default plusOne;
