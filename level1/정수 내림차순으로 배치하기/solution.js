function solution(n) {
  const descendingOrder = n
    .toString()
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('');

  return Number(descendingOrder);
}
