function solution(left, right) {
  let count = 0;
  
  for (let i = left; i <= right; i++) {
    if (countDivisor(i) % 2 === 0) count += i;
    else count -= i;
  }
  return count;
}

function countDivisor(number) {
  const divisorList = [];
  const sqrt = Math.sqrt(number);

  if (Number.isInteger(sqrt)) divisorList.push(sqrt);

  for (let i = 1; i * i < number; i++) {
    if (number % i === 0) divisorList.push(i, number/ i);
  }
  return divisorList.length;
}
