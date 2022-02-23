function solution(x, n) {
  const fillWithXArray = new Array(n).fill(x);
  return fillWithXArray.map((num, index) => num += x * index);
}
