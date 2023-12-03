function getArrayParams(...arr) {
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  min = Math.min(...arr);
  max = Math.max(...arr);

  sum = arr.reduce((acc, number) => acc + number, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
   let sum = arr.reduce((acc, number) => acc + number, 0);
   return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0){
    return 0;
  } else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let minMax = max - min;
    return(minMax);   
  }
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0){
    return 0;
  } else {
    let sumEvenElements = 0;
    let sumOddElement = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0){
      sumEvenElements = sumEvenElements + arr[i];
      }else{
      sumOddElement = sumOddElement + arr[i];
      };
    }
    return(sumEvenElements - sumOddElement); 
    };
  }


function averageEvenElementsWorker(...arr) {
  if(arr.length == 0){
    return 0;
  } else {
  let sumEvenElements = 0;
  let countEvenElements = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElements = sumEvenElements + arr[i];
      countEvenElements = countEvenElements + 1;
    }
  }
  return(sumEvenElements / countEvenElements);
  };
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for( let i = 0; i < arrOfArr.length; i++) {
    
  }
}
