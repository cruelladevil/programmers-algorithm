import * as fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

function getDirList(dir) {
  try {
    return fs
      .readdirSync(dir, { encoding: 'utf-8', withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name.normalize('NFC'))
      .sort();
  } catch (err) {
    return [];
  }
}

export function getStrList(levelNumber) {
  const levelDir = path.resolve(__dirname, `./level${levelNumber}`);
  const dirList = getDirList(levelDir);
  const strList = dirList.map(dirname => {
    const title = dirname;
    const dir = path.resolve(levelDir, `./${title}`, 'README.md');
    const url = fs.readFileSync(dir, 'utf-8').match(/https:\/\/programmers.co.kr\/learn\/courses\/30\/lessons\/\d+/g)[0];
    return [title, url, levelNumber];
  });
  return strList;
}

function makeReadmeStr([title, url, levelNumber]) {
  const titleQuery = title.split(' ').join('%20');
  const questionURL = `https://github.com/cruelladevil/programmers-algorithm/tree/main/level${levelNumber}/${titleQuery}`;
  const codeURL = `https://github.com/cruelladevil/programmers-algorithm/blob/main/level${levelNumber}/${titleQuery}/solution.js`;
  const pageURL = url;
  return `${title} | [📄](${questionURL}) | [✔️](${codeURL}) | [🏷️](${pageURL})`;
}

export function getStr(levelNumber) {
  if (getStrList(levelNumber).length === 0) return '';
  return getStrList(levelNumber).map(item => makeReadmeStr(item)).join('\n') + '\n';
}
