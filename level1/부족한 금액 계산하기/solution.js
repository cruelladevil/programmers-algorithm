function solution(price, money, count) {
  const sumPrice = price * (1 + count) * count / 2;
  const isEnough = money > sumPrice;
  const necessaryMoney = isEnough ? 0 : (sumPrice - money);
  return necessaryMoney;
}
