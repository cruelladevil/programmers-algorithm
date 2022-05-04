function solution(arr, divisor) {
  const multipleList = arr
    .filter((number) => number % divisor === 0)
    .sort((a, b) => a - b);

  return multipleList.length > 0 ? multipleList : [-1];
}
