function solution(n) {
  const numberList = ['4', '1', '2'];
  let answer = '';

  while (n > 0) {
    const remainder = n % 3;
    answer = numberList[remainder] + answer;
    if (remainder === 0) {
      n = Math.floor((n - 1) / 3);
    } else {
      n = Math.floor(n / 3);
    }
  }
  return answer;
}
