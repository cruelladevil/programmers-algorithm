function solution(brown, yellow) {
  const answer = [];
  const area = brown + yellow;
  for (let i = 1; i * i <= area; i++) {
    const height = i;
    const width = area / i;
    const isHeight = area % height === 0;
    const isPerimeter = (brown + 4) % (width + height) === 0;

    if (isHeight && isPerimeter) answer.push(width, height);
  }
  return answer;
}
