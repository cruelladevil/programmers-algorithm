function solution(n) {
  const string = n.toString();
  const split = string.split('');
  return split.reduce((acc, cur) => acc + parseInt(cur), 0);
}
