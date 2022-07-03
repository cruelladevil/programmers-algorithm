function solution(arr, divisor) {
  const multipleList = arr
    .filter((number) => number % divisor === 0)
    .sort((a, b) => a - b);

  if (multipleList.length === 0) return [-1];

  return multipleList;
}
