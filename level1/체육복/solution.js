function solution(n, lost, reserve) {
  const uniformList = Array.from({ length: n }, () => 1);

  lost.forEach((number) => {
    uniformList[number - 1] -= 1;
  });

  reserve.forEach((number) => {
    uniformList[number - 1] += 1;
  });

  uniformList.forEach((current, i) => {
    const previous = uniformList[i - 1];
    const next = uniformList[i + 1];

    if (current === 0 && previous === 2) {
      uniformList[i - 1] -= 1;
      uniformList[i] += 1;
    } else if (current === 0 && next === 2) {
      uniformList[i + 1] -= 1;
      uniformList[i] += 1;
    }
  });

  return uniformList.filter((count) => count > 0).length;
}
