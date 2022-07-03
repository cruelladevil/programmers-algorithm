function solution(a, b) {
  const lastDateList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayList = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

  let date = 0;

  for (let i = 0; i < a - 1; i += 1) {
    date += lastDateList[i];
  }

  date += b;

  return dayList[(date - 1) % 7];
}
