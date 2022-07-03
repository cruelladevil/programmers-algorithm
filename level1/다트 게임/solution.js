function solution(dartResult) {
  const scoreList = dartResult.match(/\d+/g).map(Number);
  const bonusOptionList = dartResult.match(/[SDT][*#]?/g);

  bonusOptionList.forEach((item, i) => {
    const [bonus, option] = item.split('');

    switch (bonus) {
      case 'S':
        break;
      case 'D':
        scoreList[i] **= 2;
        break;
      case 'T':
        scoreList[i] **= 3;
        break;
    }

    switch (option) {
      case '*':
        scoreList[i] *= 2;
        if (scoreList[i - 1]) scoreList[i - 1] *= 2;
        break;
      case '#':
        scoreList[i] *= -1;
        break;
    }
  });

  return scoreList.reduce((total, score) => total + score);
}
