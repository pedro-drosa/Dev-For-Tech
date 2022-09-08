function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(value) {
  if (isNaN(value)) return 'Não é um número';
  if (isDivisible(value, 3) && isDivisible(value, 5)) return 'FizzBuzz';
  if (isDivisible(value, 3)) return 'Fizz';
  if (isDivisible(value, 5)) return 'Buzz';
  return value;
}

(() => {
  console.log(fizzBuzz(9)); // Fizz
  console.log(fizzBuzz(15)); // FizzBuzz
  console.log(fizzBuzz(20)); // Buzz
  console.log(fizzBuzz('accate')); // Não é um número
  console.log(fizzBuzz(7)); // 7
})();
