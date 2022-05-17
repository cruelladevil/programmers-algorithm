function solution(participant, completion) {
  const onRunning = {};

  participant.forEach((runner) => {
    if (!onRunning[runner]) onRunning[runner] = 0;
    onRunning[runner] += 1;
  });

  completion.forEach((runner) => {
    onRunning[runner] -= 1;
  });

  const notFinishedList = Object.entries(onRunning).filter(([, value]) => value > 0);
  const theOnlyOneNotFinished = notFinishedList.map(([key]) => key).find(String);

  return theOnlyOneNotFinished;
}
