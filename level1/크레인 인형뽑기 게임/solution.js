function solution(board, moves) {
  const EMPTY = 0;

  const stack = [];
  let deleteCount = 0;

  moves.forEach((move) => {
    const col = move - 1;
    let picked = EMPTY;

    for (let row = 0; row < board.length; row += 1) {
      const item = board[row][col];

      if (item !== EMPTY) {
        picked = item;
        board[row][col] = EMPTY;
        break;
      }
    }

    if (picked !== EMPTY) {
      if (picked === stack[stack.length - 1]) {
        stack.pop();
        deleteCount += 2;
      } else {
        stack.push(picked);
      }
    }
  });

  return deleteCount;
}
