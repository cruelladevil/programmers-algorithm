function solution(n) {
  let roop;
  for (roop = 0; roop < 500; roop++) {
    if (n === 1) break;
    n = (n % 2 === 0) ? (n / 2) : (n * 3 + 1);
  }
  return (n === 1) ? roop : -1;
}
