function solution(d, budget) {
  let index;
  let sum = 0;
  d.sort((a, b) => a - b);
  for (index = 0; index < d.length; index++) {
    sum += d[index];
    if (sum > budget) break;
  }
  return index;
}
