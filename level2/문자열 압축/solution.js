function solution(s) {
  const stringLengthList = [];

  for (let unitLength = 1; unitLength <= Math.ceil(s.length / 2); unitLength++) {
    let count = 1;
    let string = '';
    for (let i = 0; i < s.length; i += unitLength) {
      const start = i;
      const end = start + unitLength;
      const current = s.slice(start, end);
      const next = s.slice(start + unitLength, end + unitLength);
      if (current === next) {
        count++;
      } else {
        string += count > 1 ? `${count}${current}` : current;
        count = 1;
      }
    }
    const stringLengthObject = { unitLength, string, length: string.length };
    stringLengthList.push(stringLengthObject);
  }
  const lengthList = stringLengthList.map(({ length }) => length);
  return Math.min(...lengthList);
}
