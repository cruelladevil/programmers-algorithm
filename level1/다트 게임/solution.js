function solution(dartResult) {
  const dartList = dartResult.match(/\d.?\D/g);
  const scoreList = [];

  const getScoreBonus = (score, bonus) => {
    switch (bonus) {
      case 'S':
        return score;
      case 'D':
        return score ** 2;
      case 'T':
        return score ** 3;
      default:
        return score;
    }
  };

  const getScoreOption = (score, option, i) => {
    switch (option) {
      case '*':
        if (scoreList[i - 1]) scoreList[i - 1] *= 2;
        return score * 2;
      case '#':
        return score * -1;
      default:
        return score;
    }
  };

  dartList.forEach((dart, i) => {
    const [number, bonus, option] = dart.split(/([SDT])/);
    let score = Number(number);
    score = getScoreBonus(score, bonus);
    score = getScoreOption(score, option, i);
    scoreList.push(score);
  });

  return scoreList.reduce((total, score) => total + score);
}
