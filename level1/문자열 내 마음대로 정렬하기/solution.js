function solution(strings, n) {
  strings.sort((a, b) => {
    const nthCharA = a.charAt(n);
    const nthCharB = b.charAt(n);

    if (nthCharA.localeCompare(nthCharB) === 0) return a.localeCompare(b);

    return nthCharA.localeCompare(nthCharB);
  });

  return strings;
}
