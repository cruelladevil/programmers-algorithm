function solution(n) {
  const sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) return (sqrt + 1) ** 2;

  return -1;
}
