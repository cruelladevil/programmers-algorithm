function solution(s) {
  const { length } = s;

  if (length !== 4 && length !== 6) return false;

  for (let i = 0; i < length; i += 1) {
    const char = s.charAt(i);
    const number = Number(char);
    if (Number.isNaN(number)) return false;
  }

  return true;
}
