function solution(a, b) {
  const dotProduct = a.reduce((sum, aValue, i) => {
    const bValue = b[i];

    return sum + aValue * bValue;
  }, 0);

  return dotProduct;
}
