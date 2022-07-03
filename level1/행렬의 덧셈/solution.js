function solution(arr1, arr2) {
  const m = arr1.length;
  const n = arr1[0].length;

  const result = Array.from({ length: m }, () => {
    return Array.from({ length: n });
  });

  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      result[row][col] = arr1[row][col] + arr2[row][col];
    }
  }

  return result;
}
