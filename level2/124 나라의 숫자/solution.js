function solution(n) {
  const ternaryObject = { 0: '4', 1: '1', 2: '2' };
  let tmp = n;
  let answer = '';

  while (tmp > 0) {
    const remainder = tmp % 3;
    answer = ternaryObject[remainder] + answer;
    if (remainder === 0) {
      tmp = Math.floor((tmp - 1) / 3);
    } else {
      tmp = Math.floor(tmp / 3);
    }
  }

  return answer;
}
