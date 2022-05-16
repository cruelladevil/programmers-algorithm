function solution(a, b) {
  const innerProduct = a.reduce((sum, aValue, i) => {
    const bValue = b[i];
    const currentValue = aValue * bValue;

    return sum + currentValue;
  }, 0);

  return innerProduct;
}
