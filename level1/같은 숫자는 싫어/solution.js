function solution(arr) {
  return arr.filter((_, i) => arr[i] !== arr[i + 1]);
}
