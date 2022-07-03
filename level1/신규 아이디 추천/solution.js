function solution(new_id) {
  let recommand = new_id;
  // 1단계
  recommand = recommand.toLowerCase();
  // 2단계
  recommand = recommand.replace(/[^a-z0-9-_.]/g, '');
  // 3단계
  recommand = recommand.replace(/\.{2,}/g, '.');
  // 4단계
  recommand = recommand.replace(/^\.|\.$/g, '');
  // 5단계
  if (recommand === '') recommand = 'a';
  // 6단계
  if (recommand.length >= 16) {
    recommand = recommand.slice(0, 15);
    recommand = recommand.replace(/\.$/, '');
  }
  // 7단계
  while (recommand.length < 3) {
    recommand += recommand.slice(-1);
  }

  return recommand;
}
