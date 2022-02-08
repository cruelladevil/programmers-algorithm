function solution(s) {
  const isLength4or6 = s.length === 4 || s.length === 6;
  const isAllNumber = s.split('').every((element) => element > -Infinity);
  return isLength4or6 && isAllNumber;
}
