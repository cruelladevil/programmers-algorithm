function solution(n) {
  const ternary = n.toString(3);
  const reverse = ternary.split('').reverse().join('');
  const decimal = parseInt(reverse, 3);

  return decimal;
}
