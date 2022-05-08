function solution(clothes) {
  const closet = {};
  let combination = 1;

  clothes.forEach(([cloth, type]) => {
    if (!closet[type]) closet[type] = [];

    closet[type].push(cloth);
  });

  const valueList = Object.values(closet);

  valueList.forEach(({ length }) => {
    combination *= length + 1;
  });

  return combination - 1;
}
