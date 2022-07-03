function solution(id_list, report, k) {
  const reportMap = {};

  report.forEach((item) => {
    const [userId, reportId] = item.split(' ');

    if (!reportMap[reportId]) reportMap[reportId] = new Set();

    reportMap[reportId].add(userId);
  });

  const mailCountMap = {};

  id_list.forEach((id) => {
    mailCountMap[id] = 0;
  });

  Object.values(reportMap).forEach((userSet) => {
    if (userSet.size >= k) {
      userSet.forEach((userId) => {
        mailCountMap[userId] += 1;
      });
    }
  });

  return Object.values(mailCountMap);
}
