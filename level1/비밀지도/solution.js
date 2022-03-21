function solution(n, arr1, arr2) {
  const wallStringList = [];
  const binary1 = arr1.map(num => num.toString(2).padStart(n, '0'));
  const binary2 = arr2.map(num => num.toString(2).padStart(n, '0'));

  for (let i = 0; i < binary1.length; i++) {
    let wallString = '';
    const item1 = binary1[i];
    const item2 = binary2[i];

    for (let j = 0; j < item1.length; j++) {
      if (item1[j] === '0' && item2[j] === '0') wallString += ' ';
      else wallString += '#';
    }
    wallStringList.push(wallString);
  }
  return wallStringList;
}
