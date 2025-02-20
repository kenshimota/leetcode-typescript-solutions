function lengthOfLastWord(s: string): number {
  const lastWord: string | undefined = s.trim().split(" ").pop();

  if (!lastWord) {
    return 0;
  }

  return lastWord.length;
}

export default lengthOfLastWord;
