function solution(n) {
  const ternary = n.toString(3);
  let reverse = '';

  for (let i = 0; i < ternary.length; i += 1) {
    reverse = ternary.charAt(i) + reverse;
  }

  return parseInt(reverse, 3);
}
