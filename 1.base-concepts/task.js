"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - (4 * a * c);
  let corn1;
  let corn2;
  if(discriminant === 0) {
    corn = - b / (2 * a);
    arr.push(corn);
  } else if(discriminant > 0) {
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
  let everyMonthpayment = s * (p + (p / (((1 + p) ** n) - 1)));
  let creditSumm = Number(everyMonthpayment * countMonths).toFixed(2);
  
  return creditSumm;

}