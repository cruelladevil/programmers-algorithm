function solution(s) {
  const JadenCase = s
    .split(' ')
    .map((word) => {
      const firstCharUpperCase = word.slice(0, 1).toUpperCase();
      const restCharLowerCase = word.slice(1).toLowerCase();
      return firstCharUpperCase + restCharLowerCase;
    })
    .join(' ');
  return JadenCase;
}
