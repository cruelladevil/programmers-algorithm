function solution(n) {
  const numberToString = n.toString();
  let sum = 0;

  for (let i = 0; i < numberToString.length; i += 1) {
    sum += Number(numberToString[i]);
  }

  return sum;
}
