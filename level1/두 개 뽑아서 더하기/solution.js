function solution(numbers) {
  const sumSet = new Set();

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      sumSet.add(numbers[i] + numbers[j]);
    }
  }

  return [...sumSet].sort((a, b) => a - b);
}
