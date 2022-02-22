function solution(s) {
  const lettersList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let lowerCaseStr = s.toLowerCase();
  for (let i = 0; i < lettersList.length; i++) {
    const splitted = lowerCaseStr.split(lettersList[i]);
    lowerCaseStr = splitted.join(numbersList[i]);
  }
  return parseInt(lowerCaseStr);
}
