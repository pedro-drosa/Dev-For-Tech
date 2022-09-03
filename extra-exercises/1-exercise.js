function highestValueBetween(firstNumber, secondNumber) {
  const equalValues = firstNumber !== secondNumber;
  const higherValue = Math.max(firstNumber, secondNumber);
  return equalValues ? higherValue : 'Os números são iguais';
}

(() => {
  console.log(highestValueBetween(-100, 100));
})();
