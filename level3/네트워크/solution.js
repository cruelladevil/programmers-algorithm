function solution(n, computers) {
  const { length } = n;
  const visited = Array.from({ length }, () => false);
  let count = 0;

  const dfs = (i) => {
    visited[i] = true;

    for (let j = 0; j < computers[i].length; j += 1) {
      if (!visited[j] && computers[i][j] === 1) dfs(j);
    }
  };

  computers.forEach((_, i) => {
    if (!visited[i]) {
      dfs(i);
      count += 1;
    }
  });

  return count;
}
