function solution(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    let result;     // A(n)
    let iterA = 0;  // A(n-2)
    let iterB = 1;  // A(n-1)

    for (let i = 2; i <= n; i++) {
      result = (iterA % 1234567) + (iterB % 1234567);
      iterA = iterB;
      iterB = result;
    }
    return result % 1234567;
  }
}
