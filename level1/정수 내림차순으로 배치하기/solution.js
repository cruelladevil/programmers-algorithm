function solution(n) {
  const descendingOrderString = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return parseInt(descendingOrderString);
}
