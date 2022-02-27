function solution(s) {
  const lowerCaseSplittedArray = s.toLowerCase().split('');
  const pCaseCount = lowerCaseSplittedArray.filter(letter => letter === 'p').length;
  const yCaseCount = lowerCaseSplittedArray.filter(letter => letter === 'y').length;
  return pCaseCount === yCaseCount;
}
