function solution(n) {
  const result = [];
  n.toString()
    .split('')
    .forEach(str => result.unshift(parseInt(str)));
  return result;
}
