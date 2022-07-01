function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);

  let left = 1;
  let right = distance;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const deleteCount = getDeleteRocksCount(rocks, distance, middle);

    if (deleteCount <= n) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left - 1;
}

function getDeleteRocksCount(rocks, endPoint, minDistance) {
  const tmp = [...rocks, endPoint];

  let deleteCount = 0;
  let current = 0;

  tmp.forEach((rock) => {
    const isNearThanDistance = rock - current < minDistance;

    if (isNearThanDistance) {
      deleteCount += 1;
    } else {
      current = rock;
    }
  });

  return deleteCount;
}
