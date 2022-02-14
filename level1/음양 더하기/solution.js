function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, index) => {
    return signs[index] ? acc + cur : acc - cur
  }, 0);
}
