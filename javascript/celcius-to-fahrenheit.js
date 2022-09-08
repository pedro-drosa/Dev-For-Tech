function convertCelsiusToFahrenheit(valueInCelsius) {
  const degreesInCelsius = Number(valueInCelsius);
  if (typeof degreesInCelsius !== 'number') return 'Digite um valor válido';
  return degreesInCelsius * 1.8 + 32;
}

(() => {
  console.log(convertCelsiusToFahrenheit(1)); // 33.8
  console.log(convertCelsiusToFahrenheit(40)); // 104
})();
