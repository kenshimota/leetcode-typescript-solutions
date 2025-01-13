function toLowerCase(s: string): string {
  const str: number[] = [];

  for (const c of s) {
    let n: number = c.codePointAt(0) || 0;

    if (n >= 65 && n <= 90) {
      n += 32;
    }

    str.push(n);
  }

  return str.map((n) => String.fromCodePoint(n)).join("");
}

export default toLowerCase;
