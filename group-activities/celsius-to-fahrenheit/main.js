function convertCelsiusToFahrenheit(valueInCelsius) {
  const degreesInCelsius = Number(valueInCelsius);
  if (typeof degreesInCelsius !== 'number') return 'Digite um valor válido';
  return degreesInCelsius * 1.8 + 32;
}

function main() {
  const inputUser = window.prompt('Digite os graus em Cº: ');
  const conversionResult = convertCelsiusToFahrenheit(inputUser);
  window.alert(`F°: ${conversionResult}`);
}

main();
