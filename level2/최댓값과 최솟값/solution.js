function solution(s) {
  const numberList = s.split(' ');
  const minNumber = Math.min(...numberList);
  const maxNumber = Math.max(...numberList);

  return `${minNumber} ${maxNumber}`;
}
