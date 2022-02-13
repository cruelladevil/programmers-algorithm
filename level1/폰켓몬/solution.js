function solution(nums) {
  const maxKind = nums.length / 2;
  const phoneketmonKind = new Set(nums).size;
  return (maxKind < phoneketmonKind) ? maxKind : phoneketmonKind;
}
