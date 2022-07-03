function solution(n) {
  const numString = String(n);
  let sum = 0;

  for (let i = 0; i < numString.length; i += 1) {
    sum += Number(numString.charAt(i));
  }

  return sum;
}
