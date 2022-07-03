function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const count = arr.length;

  return sum / count;
}
