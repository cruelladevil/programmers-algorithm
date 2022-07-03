function solution(price, money, count) {
  const totalPrice = (count + 1) * price * (count / 2);

  if (money > totalPrice) return 0;

  return totalPrice - money;
}
