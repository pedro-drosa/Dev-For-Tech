function formatCurrency(value) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function twentyPercentOff(productPrice) {
  const discountPrice = productPrice * 0.2;
  return discountPrice;
}

function calculate(productPrice) {
  const discountPercentage = twentyPercentOff(productPrice);
  const total = productPrice - discountPercentage;

  return {
    productPrice: formatCurrency(productPrice),
    discount: formatCurrency(discountPercentage),
    total: formatCurrency(total),
  };
}

(() => {
  const productPrice = 1000;
  console.log(calculate(productPrice));
})();
