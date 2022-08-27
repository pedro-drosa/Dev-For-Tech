const readLine = require('readline');
const { stdin, stdout } = require('process');

const terminal = readLine.createInterface({ input: stdin, output: stdout });
const defaultPassword = 'batatafrita';

function checkPassword(password) {
  return password === defaultPassword;
}

terminal.question('Digite a senha do usuário: ', (password) => {
  const isAuthenticated = checkPassword(password);
  if (isAuthenticated) {
    terminal.write('Acesso permitido');
    terminal.close();
    return;
  }
  terminal.write('Você não tem acesso ao sistema');
  terminal.close();
});
