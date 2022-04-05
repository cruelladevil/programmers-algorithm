function solution(record) {
  const users = new Map();
  const messageList = [];
  const messageType = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  for (const item of record) {
    const [type, uid, name] = item.split(' ');
    if (name) users.set(uid, name);
    if (type !== 'Change') messageList.push([uid, messageType[type]]);
  }
  return messageList.map(([uid, message]) => `${users.get(uid)}${message}`);
}
