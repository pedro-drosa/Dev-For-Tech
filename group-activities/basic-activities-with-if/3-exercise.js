const passwordAllowed = '1234';
const userInput = prompt('Digite sua senha: ');

if (userInput === passwordAllowed) {
  alert('ACESSO PERMITIDO');
} else {
  alert('ACESSO NEGADO');
}
