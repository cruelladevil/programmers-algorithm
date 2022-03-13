function solution(w, h) {
  const GCD = calculateGCD(w, h);
  const rect = w * h;
  const empty = w + h - GCD;
  return rect - empty;
}

function calculateGCD(a, b) {
  return (a % b) ? calculateGCD(b, a % b) : b;
}
