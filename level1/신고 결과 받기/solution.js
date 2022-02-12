function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const reportObj = {};
  id_list.forEach((id) => reportObj[id] = new Set());
  report.forEach((element) => {
    const [userId, reportId] = element.split(" ");
    reportObj[reportId].add(userId);
  });
  for (const reportId in reportObj) {
    const reportSet = reportObj[reportId];
    if (reportSet.size >= k) {
      reportSet.forEach((userId) => result[id_list.indexOf(userId)] += 1);
    }
  }
  return result;
}
