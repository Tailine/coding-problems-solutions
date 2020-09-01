function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}
