function isEven(value) {
  return value % 2 === 0;
}

function isPrime(numero) {
  for (let index = 2; index < numero; index++) {
    if (numero % index === 0) return false;
  }
  return true;
}

function main() {
  for (let index = 1; index <= 10; index++) {
    if (isEven(index) && isPrime(index)) {
      console.log(index, 'PAR PRIMO');
    } else if (!isEven(index) && isPrime(index)) {
      console.log(index, 'ÍMPAR PRIMO');
    } else if (isEven(index) && !isPrime(index)) {
      console.log(index, 'PAR');
    } else {
      console.log(index, 'ÍMPAR');
    }
  }
}

main();
