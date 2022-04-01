function solution(people, limit) {
  let boatCount = 0;
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++, boatCount++) {
    const biggest = people[i];
    const smallest = people[j];
    if (biggest + smallest <= limit) j--;
  }
  return boatCount;
}
