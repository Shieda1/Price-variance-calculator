// https://calculator.swiftutors.com/price-variance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const priceVarianceRadio = document.getElementById('priceVarianceRadio');
const standardPriceRadio = document.getElementById('standardPriceRadio');
const actualPriceRadio = document.getElementById('actualPriceRadio');
const actualQuantityRadio = document.getElementById('actualQuantityRadio');

let priceVariance;
let standardPrice = v1;
let actualPrice = v2;
let actualQuantity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

priceVarianceRadio.addEventListener('click', function() {
  variable1.textContent = 'Standard Price';
  variable2.textContent = 'Actual Price';
  variable3.textContent = 'Actual Quantity';
  standardPrice = v1;
  actualPrice = v2;
  actualQuantity = v3;
});

standardPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Price Variance';
  variable2.textContent = 'Actual Price';
  variable3.textContent = 'Actual Quantity';
  priceVariance = v1;
  actualPrice = v2;
  actualQuantity = v3;
});

actualPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Price Variance';
  variable2.textContent = 'Standard Price';
  variable3.textContent = 'Actual Quantity';
  priceVariance = v1;
  standardPrice = v2;
  actualQuantity = v3;
});

actualQuantityRadio.addEventListener('click', function() {
  variable1.textContent = 'Price Variance';
  variable2.textContent = 'Standard Price';
  variable3.textContent = 'Actual Price';
  priceVariance = v1;
  standardPrice = v2;
  actualPrice = v3;
});


btn.addEventListener('click', function() {
  
  if(priceVarianceRadio.checked)
    result.textContent = `Price Variance = ${computePriceVariance().toFixed(2)}`;

  else if(standardPriceRadio.checked)
    result.textContent = `Standard Price = ${computeStandardPrice().toFixed(2)}`;

  else if(actualPriceRadio.checked)
    result.textContent = `Actual Price = ${computeAactualPrice().toFixed(2)}`;

  else if(actualQuantityRadio.checked)
    result.textContent = `Actual Quantity = ${computeActualQuantity().toFixed(2)}`;
})

// calculation

function computePriceVariance() {
  return (Number(standardPrice.value) - Number(actualPrice.value)) * Number(actualQuantity.value);
}

function computeStandardPrice() {
  return (Number(priceVariance.value) / Number(actualQuantity.value)) + Number(actualPrice.value);
}

function computeAactualPrice() {
  return Number(standardPrice.value) - (Number(priceVariance.value) / Number(actualQuantity.value));
}

function computeActualQuantity() {
  return Number(priceVariance.value) / (Number(standardPrice.value) - Number(actualPrice.value));
}
