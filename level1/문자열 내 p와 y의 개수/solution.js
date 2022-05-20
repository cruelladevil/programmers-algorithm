function solution(s) {
  let pCount = 0;
  let yCount = 0;

  const split = s.toLowerCase().split('');

  split.forEach((item) => {
    if (item === 'p') pCount += 1;
    if (item === 'y') yCount += 1;
  });

  return pCount === yCount;
}
