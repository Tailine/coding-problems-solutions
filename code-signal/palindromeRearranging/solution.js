function palindromeRearranging(inputString) {
  const charCount = {};

  for (let i = 0; i < inputString.length; i++) {
    if (charCount[inputString[i]]) {
      charCount[inputString[i]] = charCount[inputString[i]] + 1;
    } else {
      charCount[inputString[i]] = 1;
    }
  }

  return !(
    Object.values(charCount).filter((count) => count % 2 !== 0).length > 1
  );
}
