function solution(participant, completion) {
  const onRunningMap = {};

  participant.forEach((runner) => {
    if (!onRunningMap[runner]) onRunningMap[runner] = 0;
    onRunningMap[runner] += 1;
  });

  completion.forEach((runner) => {
    onRunningMap[runner] -= 1;
  });

  const [notFinishedOne] = Object.entries(onRunningMap).find(([_, count]) => count > 0);

  return notFinishedOne;
}
