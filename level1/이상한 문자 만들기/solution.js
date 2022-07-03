function solution(s) {
  const wordList = s.split(' ');

  const weirdWordList = wordList.map((word) => {
    let weirdWord = '';

    for (let i = 0; i < word.length; i += 1) {
      if (i % 2 === 0) {
        weirdWord += word.charAt(i).toUpperCase();
      } else {
        weirdWord += word.charAt(i).toLowerCase();
      }
    }

    return weirdWord;
  });

  return weirdWordList.join(' ');
}
