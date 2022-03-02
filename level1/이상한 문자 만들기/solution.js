function solution(s) {
  const wordList = s.split(' ');
  const weirdWordList = wordList.map(word => {
    let weirdWord = '';
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) weirdWord += word[i].toUpperCase();
      else weirdWord += word[i].toLowerCase();
    }
    return weirdWord;
  });
  return weirdWordList.join(' ');
}
