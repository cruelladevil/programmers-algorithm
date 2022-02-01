function solution(arr) {
  return arr.filter((_, index) => arr[index] !== arr[index + 1]);
}
