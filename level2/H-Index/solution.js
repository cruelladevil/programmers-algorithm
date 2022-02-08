function solution(citations) {
  let h_index;
  const papersMaxRange = citations.length;
  const citationsMaxRange = Math.max(...citations);
  const loopLength = Math.min(papersMaxRange, citationsMaxRange);
  for (let h = 0; h <= loopLength; h++) {
    const more_than_h = citations.filter((citation) => citation >= h).length;
    if (more_than_h < h) break;
    else h_index = h;
  }
  return h_index;
}
