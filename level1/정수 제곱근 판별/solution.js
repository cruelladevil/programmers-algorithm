function solution(n) {
  const squareRoot = Math.sqrt(n);
  return squareRoot - Math.floor(squareRoot) > 0 ? -1 : Math.pow(squareRoot + 1, 2);
}
