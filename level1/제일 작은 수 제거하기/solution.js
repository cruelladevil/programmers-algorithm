function solution(arr) {
  const minValue = Math.min(...arr);
  const minValueIndex = arr.indexOf(minValue);

  arr.splice(minValueIndex, 1);

  if (arr.length === 0) return [-1];

  return arr;
}
