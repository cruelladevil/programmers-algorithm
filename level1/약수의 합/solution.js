function solution(n) {
  let sum = 0;

  const sqrt = Math.sqrt(n);

  if (Number.isInteger(sqrt)) {
    sum += sqrt;
  }

  for (let i = 1; i * i < n; i += 1) {
    if (n % i === 0) {
      sum += i + n / i;
    }
  }

  return sum;
}
