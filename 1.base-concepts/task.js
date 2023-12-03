"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);
  let corn1;
  let corn2;
  if(d === 0) {
    corn1 = - b / (2 * a);
    arr.push(corn1);
  } else if(d > 0) {
    corn1 = ((- b + Math.sqrt(d)) / (2 * a));
    corn2 = ((-b - Math.sqrt(d)) / (2 * a));
    arr.push(corn1, corn2);
  } else {
     arr = [];
  };

  return arr;
}
console.log(solveEquation());


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let months = 12;
  let percentDiapoz = 0.01;
  let p = (percent * percentDiapoz) / months;
  let s = amount - contribution;
  let n = countMonths;
  let everyMonthPayment = s * (p + (p / (((1 + p) ** n) - 1)));
  let creditSumm = (everyMonthPayment * countMonths).toFixed(2);
  
  return Number(creditSumm);

}