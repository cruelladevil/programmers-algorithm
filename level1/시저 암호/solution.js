function solution(s, n) {
  const LOWER_CODE_START = 97;
  const UPPER_CODE_START = 65;
  const CODE_LENGTH = 26;

  let caesarString = '';

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    switch (char) {
      case ' ':
        caesarString += ' ';
        break;
      case char.toLowerCase(): {
        const charCode = char.charCodeAt();
        const newCharCode = ((charCode + n - LOWER_CODE_START) % CODE_LENGTH) + LOWER_CODE_START;
        caesarString += String.fromCharCode(newCharCode);
        break;
      }
      case char.toUpperCase(): {
        const charCode = char.charCodeAt();
        const newCharCode = ((charCode + n - UPPER_CODE_START) % CODE_LENGTH) + UPPER_CODE_START;
        caesarString += String.fromCharCode(newCharCode);
        break;
      }
    }
  }

  return caesarString;
}
