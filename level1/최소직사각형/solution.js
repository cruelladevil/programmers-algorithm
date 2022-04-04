function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([width, height]) => {
    if (height > width) [width, height] = [height, width];
    if (width > maxWidth) maxWidth = width;
    if (height > maxHeight) maxHeight = height;
  });
  return maxWidth * maxHeight;
}
