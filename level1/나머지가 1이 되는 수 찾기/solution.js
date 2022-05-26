function solution(n) {
  let x;

  for (x = 0; x < n; x += 1) {
    if (n % x === 1) return x;
  }

  return x;
}
