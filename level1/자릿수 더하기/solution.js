function solution(n) {
  const string = String(n);
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += parseInt(string.slice(i, i + 1));
  }
  return sum;
}
