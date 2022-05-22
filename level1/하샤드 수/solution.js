function solution(x) {
  const string = x.toString();
  let digitSum = 0;

  for (let i = 0; i < string.length; i += 1) {
    digitSum += Number(string[i]);
  }

  const isHarshadNumber = x % digitSum === 0;

  return isHarshadNumber;
}
