function solution(s) {
  const letterList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let tmp = s;

  letterList.forEach((letter, i) => {
    const letterRegExp = new RegExp(letter, 'gi');
    const number = numberList[i];
    tmp = tmp.replace(letterRegExp, number);
  });

  return Number(tmp);
}
