function solution(priorities, location) {
  const printedList = [];
  const queue = priorities.map((priority, index) => ({ priority, index }));
  while (0 < queue.length) {
    const J = queue.shift();
    if (queue.some((doc) => J.priority < doc.priority)) queue.push(J);
    else printedList.push(J);
  }
  const printedIndex = printedList.findIndex((doc) => doc.index === location) + 1;
  return printedIndex;
}
