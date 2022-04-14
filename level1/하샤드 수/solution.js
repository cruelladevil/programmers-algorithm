function solution(x) {
  const digitSum = x
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);
  const isHarshadNumber = x % digitSum === 0;
  return isHarshadNumber;
}
