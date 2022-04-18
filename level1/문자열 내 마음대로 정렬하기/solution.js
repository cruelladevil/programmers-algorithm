function solution(strings, n) {
  return strings.sort((a, b) => {
    const nthWordA = a[n];
    const nthwordB = b[n];
    if (nthWordA !== nthwordB) {
      return (nthWordA > nthwordB) - (nthWordA < nthwordB);
    } else {
      return (a > b) - (a < b);
    }
  });
}
