import * as fs from 'fs';
import path from 'path';
import { getStr, getStrList } from './string.js';

const __dirname = path.resolve();
const FILE_TO_UPDATE = path.resolve(__dirname, './README.md');

const readmeData = fs.readFileSync(FILE_TO_UPDATE, 'utf-8');
const dataList = readmeData.split(/## LEVEL\d\n\n\*\*해결한 문제 수: \d+\*\*\n\n제목 \| 문제 \| 코드 \| 페이지\n:---\|:---:\|:---:\|:---:/g);
const updateData = dataList
  .map((data, i) => {
    if (i === 0) return data;
    const title = `## LEVEL${i}`;
    const solved = `**해결한 문제 수: ${getStrList(i).length}**`
    const table = '제목 | 문제 | 코드 | 페이지';
    const line = ':---|:---:|:---:|:---:';
    const item = getStr(i);
    return `${title}\n\n${solved}\n\n${table}\n${line}\n${item}` + (i !== 5 ? '\n' : '');
  })
  .join('');

fs.writeFileSync(FILE_TO_UPDATE, updateData, 'utf-8');
