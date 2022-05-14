function solution(record) {
  const users = {};
  const messageList = [];
  const messageType = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((item) => {
    const [type, uid, name] = item.split(' ');
    if (name) users[uid] = name;
    if (type !== 'Change') messageList.push([uid, messageType[type]]);
  });

  return messageList.map(([uid, message]) => `${users[uid]}${message}`);
}
