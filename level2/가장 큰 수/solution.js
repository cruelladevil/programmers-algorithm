function solution(numbers) {
  const stringList = numbers.map(String);
  const sortedList = stringList.sort((a, b) => parseInt(b + a) - parseInt(a + b));
  const number = sortedList.join('');
  return number == 0 ? '0' : number;
}
