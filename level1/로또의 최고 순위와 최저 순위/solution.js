function solution(lottos, win_nums) {
  const minCount = lottos.filter((number) => number !== 0 && win_nums.includes(number)).length;
  const maxCount = minCount + lottos.filter((number) => number === 0).length;

  const getGrade = (count) => {
    const grade = 7 - count;

    return count > 1 ? grade : 6;
  };

  return [getGrade(maxCount), getGrade(minCount)];
}
