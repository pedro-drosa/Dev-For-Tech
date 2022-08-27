export default class DiscountCalculator {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  calculate(value) {
    const discountValue = this.paymentMethod.applyDiscount(value);
    return this.formatCurrency(discountValue);
  }

  formatCurrency(value) {
    return Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
