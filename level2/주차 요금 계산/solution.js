const convertToMinutes = (time) => {
  const [hours, minutes] = time.split(':');

  return Number(hours) * 60 + Number(minutes);
};

function solution(fees, records) {
  const parkingTable = {};

  records.forEach((record) => {
    const [time, id] = record.split(' ');
    const parkingMinutes = convertToMinutes(time);

    if (!parkingTable[id]) parkingTable[id] = [];
    parkingTable[id].push(parkingMinutes);
  });

  const keyValueList = Object.entries(parkingTable);
  const keySorted = keyValueList.sort(([keyA], [keyB]) => Number(keyA) - Number(keyB));
  const parkingTimeList = keySorted.map(([, timeList]) => timeList);

  const totalTimeList = parkingTimeList.map((timeList) => {
    const { length } = timeList;
    const diffList = [];

    if (length % 2 === 1) timeList.push(convertToMinutes('23:59'));

    for (let i = 0; i < length; i += 2) {
      const diff = timeList[i + 1] - timeList[i];
      diffList.push(diff);
    }

    const totalTime = diffList.reduce((total, time) => total + time);

    return totalTime;
  });

  const feeList = totalTimeList.map((totalTime) => {
    const [freeTime, basicCharge, unitTime, unitCharge] = fees;
    const isBasicCharge = totalTime <= freeTime;
    const additionalCharge = Math.ceil((totalTime - freeTime) / unitTime) * unitCharge;

    return isBasicCharge ? basicCharge : basicCharge + additionalCharge;
  });

  return feeList;
}
