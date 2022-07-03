function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i += 1) {
    const sqrt = Math.sqrt(i);

    if (Number.isInteger(sqrt)) {
      sum -= i;
    } else {
      sum += i;
    }
  }

  return sum;
}
