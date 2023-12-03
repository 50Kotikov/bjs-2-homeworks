function getArrayParams(...arr) {
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  min = Math.min(...arr);
  max = Math.max(...arr);

  sum = arr.reduce((acc, number) => acc + number);
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
