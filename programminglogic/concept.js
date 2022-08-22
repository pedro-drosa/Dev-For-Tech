const { stdin, stdout } = require('process');
const readLine = require('readline');
const { average } = require('./average');

const terminal = readLine.createInterface({ input: stdin, output: stdout });

function calculateConcept(average) {
  if (average >= 9) return 'A';
  if (average >= 8 && average < 9) return 'B';
  if (average >= 6 && average < 8) return 'C';
  if (average >= 5 && average < 6) return 'D';
  return 'R';
}

terminal.question('Digite a primeira nota: ', (firstNote) => {
  terminal.question('Digite a segunda nota: ', (secondNote) => {
    const finalMedia = average(+firstNote, +secondNote);
    const finalConcept = calculateConcept(finalMedia);
    console.log(`Média: ${finalMedia} - Conceito: ${finalConcept}`);
    terminal.close();
  });
});
