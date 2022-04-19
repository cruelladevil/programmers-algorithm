function solution(number, k) {
  const stack = [];
  let answer;

  for (const elem of number) {
    while (k > 0 && elem > stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(elem);
  }
  answer = stack.join('');
  return k > 0 ? answer.slice(0, number.length - k) : answer;
}
