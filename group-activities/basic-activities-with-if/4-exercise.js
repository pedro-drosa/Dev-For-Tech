const standardPrice = 0.3;
const promotionalPrice = 0.25;
const minimumQuantityForDiscount = 12;

function calculateTotal(numberOfItems, discount) {
  return parseFloat(numberOfItems * discount).toFixed(2);
}

function main() {
  const userInput = prompt('Digite a quantidade de maçãs que deseja comprar: ');
  const numberOfItems = parseInt(userInput);
  let total =
    numberOfItems < 12
      ? calculateTotal(numberOfItems, standardPrice)
      : calculateTotal(numberOfItems, promotionalPrice);

  alert(total);
}

main();
