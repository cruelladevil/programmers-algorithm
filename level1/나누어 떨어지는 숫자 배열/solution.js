function solution(arr, divisor) {
  const answer = arr.filter(number => number % divisor === 0);
  answer.sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}
