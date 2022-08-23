const totalIterations = 3;
let startingCount = 1;
const reportedNumbers = [];

function checkDuplicateNumbers(number) {
  return reportedNumbers.includes(number);
}

function checkValidValue(value) {
  return !isNaN(value);
}

function validateInput(value) {
  return !checkDuplicateNumbers(value) && checkValidValue(value);
}

function arrangeInAscendingOrder(arrayNumbers) {
  return arrayNumbers.sort((a, b) => a - b);
}

function main() {
  for (startingCount; startingCount <= totalIterations; startingCount++) {
    let userInput = prompt(`Digite o ${startingCount}° número: `);
    let userInputParsed = parseInt(userInput);

    if (validateInput(userInputParsed)) {
      reportedNumbers.push(userInputParsed);
    } else {
      alert('Digite um valor válido');
      startingCount--;
    }
  }
  const orderedValues = arrangeInAscendingOrder(reportedNumbers);
  alert(orderedValues);
}

main();
