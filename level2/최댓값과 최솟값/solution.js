function solution(s) {
  const numberList = s.split(' ');
  const maxNumber = Math.max(...numberList);
  const minNumber = Math.min(...numberList);
  return `${minNumber} ${maxNumber}`;
}
