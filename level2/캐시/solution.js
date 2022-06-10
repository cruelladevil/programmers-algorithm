function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const cache = new Set();
  let executionTime = 0;

  const cacheHit = (item) => {
    cache.delete(item);
    cache.add(item);
    executionTime += 1;
  };

  const cacheMiss = (item) => {
    if (cache.size >= cacheSize) {
      const iterator = cache.values();
      const head = iterator.next().value;
      cache.delete(head);
    }

    cache.add(item);
    executionTime += 5;
  };

  const upperCaseMappedCities = cities.map((string) => string.toUpperCase());
  upperCaseMappedCities.forEach((city) => {
    if (cache.has(city)) {
      cacheHit(city);
    } else {
      cacheMiss(city);
    }
  });

  return executionTime;
}
