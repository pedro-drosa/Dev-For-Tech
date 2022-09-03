function createAvailableNumbers(start, end) {
  const arrayNumbers = [];
  for (start; start <= end; start++) {
    arrayNumbers.push(start);
  }
  return arrayNumbers;
}

function getMultiples(value, arrayNumbers) {
  return arrayNumbers.filter((number) => number % value === 0);
}

(() => {
  const availableNumbers = createAvailableNumbers(0, 1000);
  const fiveMultiples = getMultiples(5, availableNumbers);
  console.log(fiveMultiples);
})();
