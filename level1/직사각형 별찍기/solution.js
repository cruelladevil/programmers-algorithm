process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const [n, m] = data.split(' ').map(Number);
  const starString = '*'.repeat(n);

  for (let i = 1; i <= m; i++) {
    console.log(starString);
  }
});
