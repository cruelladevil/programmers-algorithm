function solution(n, lost, reserve) {
  const uniformList = new Array(n).fill(1);
  lost.forEach(number => (uniformList[number - 1] -= 1));
  reserve.forEach(number => (uniformList[number - 1] += 1));

  for (let i = 0; i < uniformList.length; i++) {
    if (uniformList[i] === 0 && uniformList[i - 1] === 2) {
      uniformList[i - 1] -= 1;
      uniformList[i] += 1;
    } else if (uniformList[i] === 0 && uniformList[i + 1] === 2) {
      uniformList[i + 1] -= 1;
      uniformList[i] += 1;
    }
  }
  return uniformList.filter(number => number > 0).length;
}
