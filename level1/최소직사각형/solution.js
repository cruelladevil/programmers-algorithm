function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((size) => {
    let [w, h] = size;

    if (h > w) [w, h] = [h, w];
    if (w > maxWidth) maxWidth = w;
    if (h > maxHeight) maxHeight = h;
  });

  return maxWidth * maxHeight;
}
