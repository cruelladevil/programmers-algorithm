function solution(n, times) {
  const timeList = [...times].sort((a, b) => a - b);
  let left = timeList[0];
  let right = timeList[timeList.length - 1] * n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const total = timeList.reduce((acc, cur) => acc + Math.floor(middle / cur), 0);

    if (total < n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}
