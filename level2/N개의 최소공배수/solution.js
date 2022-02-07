function solution(arr) {
  function calculateGCD(a, b) {
    return (a % b) ? calculateGCD(b, a % b) : b;
  }
  function calculateLCM(a, b) {
    return a * b / calculateGCD(a, b);
  }
  return arr.reduce(calculateLCM);
}
