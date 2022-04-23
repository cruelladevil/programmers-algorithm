function solution(s) {
  const length = s.length;
  const oddCase = s.slice((length - 1) / 2, (length + 1) / 2);
  const evenCase = s.slice((length - 2) / 2, (length + 2) / 2);
  const middleLetter = length % 2 === 0 ? evenCase : oddCase;
  return middleLetter;
}
