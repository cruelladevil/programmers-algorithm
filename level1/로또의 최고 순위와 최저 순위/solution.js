function solution(lottos, win_nums) {
  const winNumsSet = new Set(win_nums);

  const unknownCount = lottos.filter((number) => number === 0).length;
  const minMatch = lottos.filter((number) => winNumsSet.has(number)).length;
  const maxMatch = minMatch + unknownCount;

  const getGrade = (match) => {
    if (match < 2) return 6;

    return 7 - match;
  };

  return [getGrade(maxMatch), getGrade(minMatch)];
}
