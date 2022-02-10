function solution(n, m) {
  function calculateGCD(a, b) {
    return (a % b) ? calculateGCD(b, a % b) : b;
  }
  function calculateLCM(a, b) {
    return a * b / calculateGCD(a, b);
  }
  return [calculateGCD(n, m), calculateLCM(n, m)];
}
