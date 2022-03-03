function solution(n) {
  const isPrimeList = new Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (isPrimeList[i] === true) {
      for (let j = i * i; j <= n; j += i) {
        isPrimeList[j] = false;
      }
    }
  }
  return isPrimeList.filter(bool => bool === true).length;
}
