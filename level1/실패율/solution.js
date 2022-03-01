function solution(N, stages) {
  const records = [];
  let currentStagePlayerNumber = stages.length;

  for (let stage = 1; stage <= N; stage++) {
    const notClearedPlayerNumber = stages.filter(item => item === stage).length;
    const failureRate = notClearedPlayerNumber / currentStagePlayerNumber;
    records[stage - 1] = [stage, failureRate];
    currentStagePlayerNumber -= notClearedPlayerNumber;
  }
  return records.sort(([, a], [, b]) => b - a).map(([stage]) => stage);
}
