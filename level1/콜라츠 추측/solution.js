function solution(n) {
  if (n === 1) return 0;

  let roop;
  let num = n;

  for (roop = 1; roop <= 500; roop += 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    if (num === 1) return roop;
  }

  return -1;
}
