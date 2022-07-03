function solution(n) {
  const isEven = n % 2 === 0;
  const waterMelon = '수박'.repeat(n / 2);

  if (!isEven) return `${waterMelon}수`;

  return waterMelon;
}
