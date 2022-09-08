function reverseString(string) {
  return Array.from(string).reverse().join('');
}

(() => console.log(reverseString('Gama Academy')))(); // ymedacA amaG
