function solution(s) {
  const wordList = s.split(' ');
  const JadenCase = wordList
    .map(word => {
      const firstUpperCase = word.slice(0, 1).toUpperCase();
      const restLowerCase = word.slice(1, word.length).toLowerCase();
      return firstUpperCase + restLowerCase;
    })
    .join(' ');
  return JadenCase;
}
