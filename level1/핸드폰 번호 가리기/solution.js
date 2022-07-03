function solution(phone_number) {
  const blurredCount = phone_number.length - 4;
  const blurredNumber = '*'.repeat(blurredCount);
  const accessibleNumber = phone_number.slice(-4);

  return `${blurredNumber}${accessibleNumber}`;
}
