function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((size) => {
    let [width, height] = size;

    if (width < height) {
      [width, height] = [height, width];
    }

    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  });

  return maxWidth * maxHeight;
}
