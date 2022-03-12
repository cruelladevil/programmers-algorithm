function solution(nums) {
  const length = nums.length;
  let primeCount = 0;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) primeCount++;
      }
    }
  }
  return primeCount;
}

function isPrime(number) {
  if (number <= 1) return false;
  
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
