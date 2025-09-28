function getArrayParams(...arr) {
   if (arr.length != 0) {
      min = arr[0];
      max = arr[0];
      average = 0;
      sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (min > array[i]) {
          min = array[i];
        };
        if (max < array[i]) {
          max = array[i];
        }
        sum += array[i];
      }
      average = Number((sum / j).toFixed(2))
      console.log(arr)
      return {min: `${min}`, max: `${max}`, Сумма: `${sum}`, Среднее: `${average}`}
  }
}
let array1 = [4, 9, 8, 4865, 45, 2, 124, 215]
getArrayParams(array1);


function summElementsWorker(arr) {
  if (arr.length != 0) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
    summa += arr[i];
    }
    console.log('Массив: ', arr);
    return summa;
  }
}
let array2 = [657, 878, 245, 545, 4, 8, 245, 17];
summElementsWorker(array2)


function differenceMaxMinWorker(array) {
  if (array.length != 0) {
      min = array[0];
      max = array[0];
      average = 0;
      for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
          min = array[i];
        };
        if (max < array[i]) {
          max = array[i];
        }
      } 
  } 
  console.log('Массив: ', arr);
  return max - min;

}
let array3 = [34, 74, 21, 325, 42, 35, 243, 354]
differenceMaxMinWorker(array3)



function differenceEvenOddWorker(array) {
  if (array.length != 0) {
      let sumEvenElement = 0;
      let sumOddElement = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          sumEvenElement += array[i];
        } else {
          sumOddElement += array[i];
        }
      }
      return Math.abs(sumEvenElement - sumOddElement);
  } 
  console.log('Массив: ', arr);
  return max - min;
}
let array4 = [36, 283, 5, 78, 79, 576, 12, 546];
differenceEvenOddWorker(array4);


function averageEvenElementsWorker(array) {
  if (array.length != 0) {
    let sumEvenElement = 0;
      let countEvenElement = 0;
      for (let i = 0; i < array.length; i += 1) {
      if (array[i] % 2 === 0) {
          sumEvenElement += array[i];
          countEvenElement += 1;
        }
      }
    } 
    console.log('Массив: ', arr);
    return sumEvenElement / countEvenElement;
} 
let array5 = [78, 6835, 154, 5, 876, 243, 54, 7854]
averageEvenElementsWorker(array5);

let arrOfArr = [[array1], [array2], [array3], [array4], [array5]]
function makeWork(arrOfArr, func) {
  
  let maxWorkerResult = -Infinity;
  func()
}



