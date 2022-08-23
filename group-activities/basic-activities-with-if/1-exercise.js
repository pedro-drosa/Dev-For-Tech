const userInput = prompt('Digite o ano do seu aniverssário: ');
const yearOfBirth = parseInt(userInput);
const minimumAgeToVote = 16;
const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;

age >= minimumAgeToVote
  ? alert(`Você deve votar esse ano`)
  : alert(`Você não pode votar ainda`);
