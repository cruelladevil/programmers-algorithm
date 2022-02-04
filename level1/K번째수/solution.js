function solution(array, commands) {
  const answer = [];
  commands.forEach((element) => {
    const [start, end, index] = element;
    const slicedArray = array.slice(start - 1, end);
    const sortedArray = slicedArray.sort((a, b) => a - b);
    answer.push(sortedArray[index - 1]);
  });
  return answer;
}
