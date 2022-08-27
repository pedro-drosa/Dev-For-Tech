export default class CreditCard {
  applyDiscount(price) {
    return price - (price * 15) / 100;
  }
}
