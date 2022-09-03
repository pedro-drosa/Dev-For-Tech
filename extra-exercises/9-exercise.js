function getMultiples(number, start, end) {
  const arrayMultiples = [];
  for (start; start <= end; start++) {
    if (start % number === 0) arrayMultiples.push(start);
  }
  return arrayMultiples;
}

function sumMultiples(arrayMultiples) {
  return arrayMultiples.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

(() => {
  const treeMultiples = getMultiples(3, 1, 1000);
  const fiveMultiples = getMultiples(5, 1, 1000);
  console.log({
    treeMultiples: sumMultiples(treeMultiples),
    fiveMultiples: sumMultiples(fiveMultiples),
  });
})();
