function solution(n) {
  for (let x = 2; x < n - 1; x += 1) {
    if (n % x === 1) return x;
  }

  return n - 1;
}
