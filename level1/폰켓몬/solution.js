function solution(nums) {
  const maxKind = nums.length / 2;
  const phoneketmonKind = new Set(nums).size;

  if (maxKind < phoneketmonKind) return maxKind;

  return phoneketmonKind;
}
