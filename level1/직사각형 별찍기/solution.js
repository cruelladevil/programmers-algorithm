process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [col, row] = data.split(' ');

  let starGrid = '';

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      starGrid += '*';
    }
    starGrid += '\n';
  }

  console.log(starGrid);
});
