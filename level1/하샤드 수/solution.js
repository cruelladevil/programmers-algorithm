function solution(x) {
  const digitSum = x.toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);
  return x % digitSum === 0;
}
