function solution(dartResult) {
  const dartList = dartResult.match(/\d.?\D/g);
  const scoreList = [];

  for (let i = 0; i < dartList.length; i++) {
    const dart = dartList[i].split(/([SDT])/);
    const [number, square, prize] = dart;
    let score = parseInt(number);

    switch (square) {
      case 'S':
        break;
      case 'D':
        score = Math.pow(score, 2);
        break;
      case 'T':
        score = Math.pow(score, 3);
        break;
    }
    switch (prize) {
      case '*':
        if (scoreList[i - 1]) scoreList[i - 1] *= 2;
        score *= 2;
        break;
      case '#':
        score *= -1;
        break;
    }
    scoreList.push(score);
  }
  return scoreList.reduce((acc, cur) => acc + cur);
}
