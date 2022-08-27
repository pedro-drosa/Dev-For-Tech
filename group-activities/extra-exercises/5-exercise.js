const { NumberPrompt } = require('enquirer');

function calculatekWValue(minimumWage) {
  const basisOfCalculation = 700;
  return (minimumWage / basisOfCalculation).toFixed(2);
}

function calculateSubtotal(kWValue, consumedEnergy) {
  return (kWValue * consumedEnergy).toFixed(2);
}

function applyDiscount(subtotal) {
  const discountPercentage = 0.9;
  return Math.abs(subtotal * discountPercentage).toFixed(2);
}

async function question(name, message) {
  const prompt = new NumberPrompt({ name, message });
  return prompt.run();
}

async function main() {
  const minimumWage = await question('wage', 'Informe o sálário mínimo:');
  const consumedEnergy = await question('consume', 'Informe o comsumo :');
  const kWValue = calculatekWValue(minimumWage);
  const subtotal = calculateSubtotal(kWValue, consumedEnergy);
  const discount = applyDiscount(subtotal);

  console.log({
    kWValue,
    subtotal,
    discount,
  });
}

main();
