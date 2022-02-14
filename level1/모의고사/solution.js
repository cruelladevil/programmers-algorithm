function solution(answers) {
  const firstCase = [1, 2, 3, 4, 5];
  const secondCase = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdCase = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = { 1: 0, 2: 0, 3: 0 };
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstCase[i % firstCase.length]) result[1] += 1;
    if (answers[i] === secondCase[i % secondCase.length]) result[2] += 1;
    if (answers[i] === thirdCase[i % thirdCase.length]) result[3] += 1;
  }
  const resultArr = Object.entries(result);
  const maxCorrect = Math.max(...Object.values(result));
  return resultArr.filter(([, correct]) => correct === maxCorrect)
    .map(([caseNumber]) => parseInt(caseNumber));
}
