function solution(participant, completion) {
  const onRunning = {};

  participant.forEach(runner => {
    onRunning[runner] = onRunning[runner] ? onRunning[runner] + 1 : 1;
  });
  completion.forEach(runner => {
    onRunning[runner] = onRunning[runner] - 1;
  });

  for (const runner in onRunning) {
    if (onRunning[runner] === 1) return runner;
  }
}
