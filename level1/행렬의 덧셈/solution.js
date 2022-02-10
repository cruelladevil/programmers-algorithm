function solution(arr1, arr2) {
  const answer = [];
  const rowLength = arr1.length;
  const columnLength = arr1[0].length;
  for (let i = 0; i < rowLength; i++) {
    answer[i] = [];
    for (let j = 0; j < columnLength; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}
