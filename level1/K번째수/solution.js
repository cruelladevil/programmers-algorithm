function solution(array, commands) {
  const result = commands.map(([i, j, k]) => {
    const sliced = array
      .slice(i - 1, j)
      .sort((a, b) => a - b);
    return sliced[k - 1];
  });

  return result;
}
