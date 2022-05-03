function solution(strings, n) {
  const tmp = [...strings];

  const compareNthChar = (a, b) => {
    const nthCharA = a[n];
    const nthCharB = b[n];

    if (nthCharA === nthCharB) {
      return (a > b) - (a < b);
    }

    return (nthCharA > nthCharB) - (nthCharA < nthCharB);
  };

  return tmp.sort(compareNthChar);
}
