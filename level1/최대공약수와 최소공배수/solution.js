function solution(n, m) {
  function calculateGCD(a, b) {
    if (a % b === 0) return b;

    return calculateGCD(b, a % b);
  }

  function calculateLCM(a, b) {
    return (a * b) / calculateGCD(a, b);
  }

  return [calculateGCD(n, m), calculateLCM(n, m)];
}
