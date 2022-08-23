function classifyBMI(imc) {
  if (imc <= 18.5) return 'Abaixo do peso';
  if (imc >= 18.6 && imc < 25) return 'No peso Ideal';
  if (imc >= 25 && imc < 30) return 'Levemente acima do peso';
  if (imc >= 30 && imc < 35) return 'Com obesidade grau I';
  if (imc >= 35 && imc < 40) return 'Com obesidade grau II';
  if (imc >= 40) return 'Com obesidade grau III';
}

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function main() {
  const weightInput = prompt('Digite seu peso: ');
  const heightInput = prompt('Digite sua altura: ');
  const resultImc = calculateBMI(weightInput, heightInput).toFixed(2);
  const resultClassification = classifyBMI(resultImc);
  alert(`Seu imc é: ${resultImc} - Classificação: ${resultClassification}`);
}

main();
