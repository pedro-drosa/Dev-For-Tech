import DiscountCalculator from './DiscountCalculator';
import paymentMethods from './DiscountCalculator/paymentmethods';
import Terminal from './Terminal';
import choices from './Terminal/choices';

async function main() {
  const price = await Terminal.question('price', 'Digite o valor do produto');
  const choice = await Terminal.select(
    'method',
    'Selecione o método de pagamento',
    choices,
  );
  const selectedOption = paymentMethods[choice[0]];
  const calculator = new DiscountCalculator(selectedOption);
  const priceWithDiscount = calculator.calculate(price);
  console.log(`Valor total à pagar ${priceWithDiscount}`);
}

main();
