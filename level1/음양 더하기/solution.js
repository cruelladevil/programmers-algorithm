function solution(absolutes, signs) {
  return absolutes.reduce((total, number, index) => {
    const sign = signs[index] ? 1 : -1;
    return total + number * sign;
  }, 0);
}
