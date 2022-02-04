function solution(phone_number) {
  const blurLength = phone_number.length - 4;
  const accessibleNumber = phone_number.slice(-4);
  const blurredNumber = "*".repeat(blurLength) + accessibleNumber;
  return blurredNumber;
}
