function solution(s) {
  const string = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === 'p') pCount += 1;
    if (string.charAt(i) === 'y') yCount += 1;
  }

  return pCount === yCount;
}
