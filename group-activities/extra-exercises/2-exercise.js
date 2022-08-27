const { Toggle, NumberPrompt } = require('enquirer');

async function toggle() {
  const prompt = new Toggle({
    message: 'O que você quer converter?',
    enabled: 'Fahrenheit em Celsius',
    disabled: 'Celsius em Fahrenheit',
  });
  return prompt.run();
}

async function prompt(name, message) {
  const prompt = new NumberPrompt({
    name: 'number',
    message: 'Informe o valor em graus: ',
  });
  return prompt.run();
}

function convertCelsiusToFahrenheit(valueInCelsius) {
  const degreesInCelsius = Number(valueInCelsius);
  if (typeof degreesInCelsius !== 'number') return 'Digite um valor válido';
  return degreesInCelsius * 1.8 + 32;
}

function convertFahrenheitToCelsius(valueInFahrenheit) {
  const degreesInFahrenheit = Number(valueInFahrenheit);
  if (typeof degreesInFahrenheit !== 'number') return 'Digite um valor válido';
  return (degreesInFahrenheit - 32) / 1.8;
}

async function main() {
  const option = await toggle();
  const degrees = await prompt();

  if (!option) {
    const result = convertCelsiusToFahrenheit(degrees);
    console.log(` ${result}°F`);
  } else {
    const result = convertFahrenheitToCelsius(degrees);
    console.log(`${result}°C`);
  }
}

main();
