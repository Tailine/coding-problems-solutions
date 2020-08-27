function reverseString(splitedString) {
  const stringCopy = [...splitedString.join("")];

  return (start, finish) => {
    const reversedWord = stringCopy.slice(start, finish).reverse();
    stringCopy.splice(start, reversedWord.length, ...reversedWord);
    return stringCopy;
  };
}

function reverseInParentheses(inputString) {
  if (!inputString) {
    return inputString;
  }

  const mappedParentheses = {};
  const openParenthesesPos = [];

  const splitedString = inputString.split("");

  splitedString.forEach((char, i) => {
    if (char === "(") {
      mappedParentheses[i] = null;
      openParenthesesPos.unshift(i);
    } else if (char === ")") {
      const pos = openParenthesesPos.shift();
      mappedParentheses[pos] = i;
    }
  });

  const reverseWord = reverseString(splitedString);

  let reversedString;

  const openArrPos = Object.keys(mappedParentheses);

  for (let i = openArrPos.length; i > 0; i--) {
    reversedString = reverseWord(
      Number(openArrPos[i - 1]) + 1,
      mappedParentheses[openArrPos[i - 1]]
    );
  }

  return reversedString.join("").replace(/[()]/g, "");
}

console.log(reverseInParentheses("(abc)d(efg)(ba(acd))"));
