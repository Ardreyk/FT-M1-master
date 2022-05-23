'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let dab = [];
  let i = num;
  while (Math.sign(i) === 1){
    dab.unshift(i % 2);
    i = Math.floor(i / 2);
  }
  return dab.join ("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}