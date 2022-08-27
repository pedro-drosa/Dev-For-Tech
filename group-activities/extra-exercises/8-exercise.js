const readLine = require('readline');
const { stdin, stdout } = require('process');

const terminal = readLine.createInterface({ input: stdin, output: stdout });

function isUpperCase(str) {
  return /[A-Z]/.test(str);
}

terminal.question('Digite seu texto: ', (userInput) => {
  const firstCharacter = userInput[0];
  if (isUpperCase(firstCharacter)) {
    terminal.write('A primeira letra é MAIÚSCULA');
    terminal.close();
    return;
  }
  terminal.write('A primeira letra é MINÚCULA');
  terminal.close;
});
