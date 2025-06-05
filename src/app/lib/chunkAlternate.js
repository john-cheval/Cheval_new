function chunkAlternating(arr, sizes = [2, 3]) {
  let result = [];
  let i = 0;
  let sizeIndex = 0;

  while (i < arr.length) {
    const size = sizes[sizeIndex % sizes.length];
    result.push(arr.slice(i, i + size));
    i += size;
    sizeIndex++;
  }

  return result;
}

export default chunkAlternating;
