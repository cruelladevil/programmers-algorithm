function solution(n) {
  const numString = String(n);
  const result = [];

  for (let i = 0; i < numString.length; i += 1) {
    const reverseIndex = numString.length - i - 1;
    result[i] = Number(numString.charAt(reverseIndex));
  }

  return result;
}
