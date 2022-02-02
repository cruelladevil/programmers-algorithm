function solution(arr) {
  const newArray = [...arr];
  const minValue = Math.min(...newArray);
  const minValueIndex = newArray.indexOf(minValue);

  newArray.splice(minValueIndex, 1);
  if (newArray.length === 0) newArray.push(-1);
  return newArray;
}
