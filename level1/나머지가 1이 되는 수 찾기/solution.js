function solution(n) {
  let x;
  for (x = 0; x < n; x++) {
    if (n % x === 1) break;
  }
  return x;
}
