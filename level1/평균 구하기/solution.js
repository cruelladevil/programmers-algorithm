function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const average = sum / arr.length;
  return average;
}
