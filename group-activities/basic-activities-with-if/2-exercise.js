const userInput = prompt('Digite um número: ');
const inputParsed = parseInt(userInput);

if (inputParsed % 2 === 0) {
  alert(`${inputParsed} é um número par: `);
} else {
  alert(`${inputParsed} é um número impar: `);
}
