const readLine = require('readline');
const { stdin, stdout } = require('process');

const terminal = readLine.createInterface({ input: stdin, output: stdout });

const availableDDI = [
  { ddi: '1', country: 'Estados Unidos' },
  { ddi: '49', country: 'Alemanha' },
  { ddi: '54', country: 'Argentina' },
  { ddi: '55', country: 'Brasil' },
  { ddi: '35', country: 'Portugal' },
];

function findCountryByDDI(ddi) {
  return availableDDI.find((country) => country.ddi === ddi);
}

terminal.question('Digite o código do país: ', (inputUser) => {
  const country = findCountryByDDI(inputUser);
  if (!country) console.log('País não encontrado');
  terminal.write(country.country);
  terminal.close();
});
