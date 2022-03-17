function solution(s) {
  const tuple = [];
  const tupleSetList = s
    .slice(2, -2)
    .split('},{')
    .map(el => el.split(',').map(Number));
  tupleSetList.sort((a, b) => a.length - b.length);
  tupleSetList.forEach(tupleSet => {
    const el = tupleSet.find(el => !tuple.includes(el));
    tuple.push(el[0]);
  });
  return tuple;
}
