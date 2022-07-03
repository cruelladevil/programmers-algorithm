function solution(N, stages) {
  const record = {};

  stages.forEach((stage) => {
    if (!record[stage]) record[stage] = 0;

    record[stage] += 1;
  });

  let stagePeople = stages.length;

  const failureList = Array.from({ length: N }, (_, i) => {
    const stage = i + 1;
    const failed = record[stage] || 0;
    const failure = failed / stagePeople;

    stagePeople -= failed;

    return { stage, failure };
  });

  failureList.sort((a, b) => b.failure - a.failure);

  return failureList.map(({ stage }) => stage);
}
