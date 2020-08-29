function reverseInParentheses(inputString) {
  if (!inputString) {
    return inputString;
  }

  const openParenthesesPos = [];
  let copyInputString = inputString;

  for (let i = 0; i < copyInputString.length; i++) {
    if (copyInputString[i] === "(") {
      openParenthesesPos.unshift(i);
    } else if (copyInputString[i] === ")") {
      const startPos = openParenthesesPos.shift();
      const subStr = copyInputString.substring(startPos, i + 1);
      const reversedStr = subStr.split("").reverse().join("");

      copyInputString = copyInputString.replace(subStr, reversedStr);
    }
  }
  return copyInputString.replace(/[\(\)]/g, "");
}
