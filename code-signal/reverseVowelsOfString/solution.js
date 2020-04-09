function reverseVowelsOfString(s) {
  const vowels = { a: "a", e: "e", i: "i", o: "o", u: "u", A: "A", E: "E", I: "I", O: "O", U: "U" }
  
  let chars = s.split('');
  let i = 0;
  let j = s.length - 1;

  while(i !== j && i < j && s.trim()) {
    if(vowels[s[i]] && vowels[s[j]]) {
      chars[i] = s[j];
      chars[j] = s[i];
      i++;
      j--;
    } else if(vowels[s[i]] && !vowels[s[j]]) {
      j--;
    } else if(!vowels[s[i]] && vowels[s[j]]) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return chars.join(""); 
}

console.log(reverseVowelsOfString(" "));