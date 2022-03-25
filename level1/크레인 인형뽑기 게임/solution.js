function solution(board, moves) {
  const stack = [];
  let count = 0;

  moves.forEach(move => {
    const pickIndex = move - 1;
    let pickedDoll = null;

    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const element = board[rowIndex][pickIndex];
      if (element !== 0) {
        pickedDoll = element;
        board[rowIndex][pickIndex] = 0;
        break;
      }
    }
    if (stack[stack.length - 1] === pickedDoll) {
      stack.pop();
      count += 2;
    } else if (pickedDoll) {
      stack.push(pickedDoll);
    }
  });
  return count;
}
