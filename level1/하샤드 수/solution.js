function solution(x) {
  const numString = String(x);

  let sum = 0;

  for (let i = 0; i < numString.length; i += 1) {
    sum += Number(numString.charAt(i));
  }

  return x % sum === 0;
}
