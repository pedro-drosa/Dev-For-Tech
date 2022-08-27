export default class CashOrCheck {
  applyDiscount(price) {
    return price - (price * 10) / 100;
  }
}
