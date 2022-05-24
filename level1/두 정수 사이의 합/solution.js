function solution(a, b) {
  const sum = a + b;
  const count = Math.abs(a - b) + 1;

  return sum * (count / 2);
}
