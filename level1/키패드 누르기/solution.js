function solution(numbers, hand) {
  let result = '';
  let left = 10;
  let right = 12;
  let number;

  const handleClickNumber = clickHand => {
    result += clickHand;
    if (clickHand === 'L') left = number;
    else right = number;
  };
  const getDistance = (a, b) => {
    const x = num => (num - 1) % 3;
    const y = num => Math.floor((num - 1) / 3);
    const distanceX = Math.abs(x(a) - x(b));
    const distanceY = Math.abs(y(a) - y(b));
    return distanceX + distanceY;
  };

  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i] || 11;

    switch (number % 3) {
      case 1:
        handleClickNumber('L');
        break;
      case 0:
        handleClickNumber('R');
        break;
      case 2:
        const distanceLeft = getDistance(number, left);
        const distanceRight = getDistance(number, right);

        if (distanceLeft === distanceRight) {
          hand === 'left' ? handleClickNumber('L') : handleClickNumber('R');
        } else {
          distanceLeft < distanceRight ? handleClickNumber('L') : handleClickNumber('R');
        }
    }
  }
  return result;
}
