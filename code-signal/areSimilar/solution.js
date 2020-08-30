function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  }

  let notMatchCount = 0;

  const listA = [];
  const listB = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      notMatchCount++;
      listA.push(a[i]);
      listB.push(b[i]);
    }
  }

  if (notMatchCount === 2 && listA.toString() === listB.reverse().toString()) {
    return true;
  }

  return false;
}
