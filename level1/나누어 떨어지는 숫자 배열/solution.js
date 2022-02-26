function solution(arr, divisor) {
  const filteredArr = arr.filter(number => number % divisor === 0);
  filteredArr.sort((a, b) => a - b);
  return (filteredArr.length === 0) ? [-1] : filteredArr;
}
