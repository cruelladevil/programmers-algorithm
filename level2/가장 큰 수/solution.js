function solution(numbers) {
  const biggestJoinedNumber = numbers
    .sort(compareJoinedNumber)
    .join('');
  return biggestJoinedNumber == 0 ? '0' : biggestJoinedNumber;
}

function compareJoinedNumber(a, b) {
  a = String(a);
  b = String(b);
  return Number(b + a) - Number(a + b);
}
