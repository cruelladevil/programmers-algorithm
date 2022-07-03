function solution(array, commands) {
  const kthNumberList = commands.map(([i, j, k]) => {
    const sliced = array.slice(i - 1, j);
    sliced.sort((a, b) => a - b);

    return sliced[k - 1];
  });

  return kthNumberList;
}
