function solution(progresses, speeds) {
  const queue = [];
  const result = [];
  const expectedDayList = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  const completeTask = () => {
    const taskCount = queue.length;
    result.push(taskCount);
    queue.length = 0;
  };

  expectedDayList.forEach((expectedDay) => {
    const currentDay = queue[0] || expectedDay;
    
    if (expectedDay > currentDay) completeTask();

    queue.push(expectedDay);
  });

  completeTask();

  return result;
}
