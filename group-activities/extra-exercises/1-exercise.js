const { NumberPrompt } = require('enquirer');

const questions = [
  { id: 'R$1.00', message: 'total de moedas de R$1.00', value: 100 },
  { id: 'R$0.50', message: 'total de moedas de R$0.50', value: 50 },
  { id: 'R$0.25', message: 'total de moedas de R$0.25', value: 25 },
  { id: 'R$0.10', message: 'total de moedas de R$0.10', value: 10 },
  { id: 'R$0.05', message: 'total de moedas de R$0.05', value: 5 },
  { id: 'R$0.01', message: 'total de moedas de R$0.01', value: 1 },
];

async function prompt(name, message) {
  const prompt = new NumberPrompt({ name, message });
  return prompt.run();
}

function convert(quantity, value) {
  return (quantity * value) / 100;
}

function calculateTotal(values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}

function validateBalance(cashValue, productPrice) {
  return productPrice <= cashValue ? 'SUFICIENTE' : 'INSUFICIENTE';
}

async function main() {
  const coinVault = [];
  const productPrice = await prompt('price', 'Digite o valor do produto');
  for (const key in questions) {
    const amountCoins = await prompt(questions[key].id, questions[key].message);
    const totalCoins = convert(amountCoins, questions[key].value);
    coinVault.push(totalCoins);
  }
  const currentBalance = calculateTotal(coinVault);
  const status = validateBalance(currentBalance, productPrice);
  console.log(`Seu saldo é de R$${currentBalance} - ${status}`);
}

main();
