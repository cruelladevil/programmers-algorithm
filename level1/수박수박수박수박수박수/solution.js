function solution(n) {
  const isOdd = (n % 2 === 1);
  return "수박".repeat(n / 2) + (isOdd ? "수" : "");
}
