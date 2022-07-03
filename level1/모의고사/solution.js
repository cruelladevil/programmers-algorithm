function solution(answers) {
  const FIRST_PATTERN = [1, 2, 3, 4, 5];
  const SECOND_PATTERN = [2, 1, 2, 3, 2, 4, 2, 5];
  const THIRD_PATTERN = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const patternList = [FIRST_PATTERN, SECOND_PATTERN, THIRD_PATTERN];
  const scoreList = patternList.map((pattern) => getScore(answers, pattern));
  const maxScore = Math.max(...scoreList);

  const maxScorePeople = [];

  scoreList.forEach((score, i) => {
    if (score === maxScore) maxScorePeople.push(i + 1);
  });

  return maxScorePeople;
}

function getScore(answers, pattern) {
  const p = pattern.length;
  let score = 0;

  answers.forEach((answer, i) => {
    if (answer === pattern[i % p]) score += 1;
  });

  return score;
}
