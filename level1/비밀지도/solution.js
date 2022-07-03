function solution(n, arr1, arr2) {
  const EMPTY_NUMCHAR = '0';
  const WALL_NUMCHAR = '1';
  const EMPTY_CHAR = ' ';
  const WALL_CHAR = '#';

  const getMergedWallString = (binaryString1, binaryString2) => {
    let merged = '';

    for (let i = 0; i < n; i += 1) {
      const char1 = binaryString1.charAt(i);
      const char2 = binaryString2.charAt(i);

      if (char1 === EMPTY_NUMCHAR && char2 === EMPTY_NUMCHAR) {
        merged += EMPTY_CHAR;
      } else {
        merged += WALL_CHAR;
      }
    }

    return merged;
  };

  const secretMap = arr1.map((number, i) => {
    const row1 = getBinaryString(number, n);
    const row2 = getBinaryString(arr2[i], n);

    return getMergedWallString(row1, row2);
  });

  return secretMap;
}

function getBinaryString(number, length) {
  return number.toString(2).padStart(length, '0');
}
