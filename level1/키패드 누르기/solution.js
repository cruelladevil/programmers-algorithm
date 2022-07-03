function solution(numbers, hand) {
  const STAR = 10;
  const HASH = 12;

  let left = STAR;
  let right = HASH;
  let result = '';

  const click = (clickHand, number) => {
    if (clickHand === 'L') {
      left = number;
    } else {
      right = number;
    }

    result += clickHand;
  };

  const getDistance = (a, b) => {
    const getRow = (number) => Math.floor((number - 1) / 3);
    const getCol = (number) => (number - 1) % 3;
    const rowDistance = Math.abs(getRow(a) - getRow(b));
    const colDistance = Math.abs(getCol(a) - getCol(b));

    return rowDistance + colDistance;
  };

  numbers.forEach((number) => {
    const target = number !== 0 ? number : 11;

    switch (target % 3) {
      case 1:
        click('L', target);
        break;
      case 0:
        click('R', target);
        break;
      case 2: {
        const leftDistance = getDistance(left, target);
        const rightDistance = getDistance(right, target);

        if (leftDistance === rightDistance) {
          if (hand === 'left') {
            click('L', target);
          } else {
            click('R', target);
          }
        } else if (leftDistance < rightDistance) {
          click('L', target);
        } else {
          click('R', target);
        }
      }
    }
  });

  return result;
}
