/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */



console.log('Задание\nЗадача 1\n--------------------------------------------------------------')

function checkContentArray(array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] != undefined) {
      return true
    }
  }
return false
}

let array1 = [4, 9, 8, 4865, 45, 2, 124, 215]


function getArrayParams(array) {
  b = checkContentArray(array);
    if (b) {
      min = array[0];
      max = array[0];
      average = 0;
      sum = 0;
      j = 0;
      for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
          min = array[i];
        };
        if (max < array[i]) {
          max = array[i];
        }
        sum += array[i];
        j += 1;
      }
      average = Number((sum / j).toFixed(2))
      let a = {min: `${min}`, max: `${max}`, Сумма: `${sum}`, Среднее: `${average}`}
      console.log(a)
      console.log(array)
  } else {
    console.log('Массив пустой')
  }
}
getArrayParams(array1);

console.log('-----------------------------------------------------------------')

console.log('Задача 2\nп.1 - Суммирование элементов массива\n-----------------------------------------------------------------')
let array2 = [657, 878, 245, 545, 4, 8, 245, 17]
function summElementsWorker(array) {
  b = checkContentArray(array);
    if (b) {
  let summa = 0;
  for (let i = 0; i < array.length; i++) {
    summa += array[i];
  }
  return summa;
  } else {
    console.log('Массив пустой')
  }
}
console.log('Сумма = ', summElementsWorker(array2));
console.log('-----------------------------------------------------------------')


let array3 = [34, 74, 21, 325, 42, 35, 243, 354]
console.log('Задача 2\nп.2 - Вычисление разницы между макс. и миним. значением \n      элементов массива\n-----------------------------------------------------------------')
function differenceMaxMinWorker(array) {
  b = checkContentArray(array);
    if (b) {
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
      } return max - min
    } else {
      console.log('Массив пустой')
  }
  
}
console.log('Разница между "max" и "min" = ', differenceMaxMinWorker(array3))

console.log('-----------------------------------------------------------------')

let array4 = [36, 283, 5, 78, 79, 576, 12, 546]

console.log('Задача 2\nп.3 - Вычисление разницы сумм \nчетных и нечетных элементов\n-----------------------------------------------------------------')

function differenceEvenOddWorker(array) {
  b = checkContentArray(array);
    if (b) {
      let sumEvenElement = 0;
      let sumOddElement = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          sumEvenElement += array[i];
        } else {
          sumOddElement += array[i];
        }
      }
      return Math.abs(sumEvenElement - sumOddElement)
    } else {
      console.log('Массив пустой')
    }
  }
console.log('Разница сумм четных и нечетных элементов = ' , differenceEvenOddWorker(array4))

console.log('-----------------------------------------------------------------')

console.log('Задача 2\nп.4 - Вычисление среднего значения чётных элементов\n-----------------------------------------------------------------')

let array5 = [78, 6835, 154, 5, 876, 243, 54, 7854]

function averageEvenElementsWorker(array) {
  b = checkContentArray(array);
    if (b) {
      let sumEvenElement = 0;
      let countEvenElement = 0;
      j = 0;
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
          sumEvenElement += array[i];
          j += 1;
        }
      } return sumEvenElement / j
    } else {
        console.log('Массив пустой')
    } 
}
console.log('Среднее четных элементов = ', averageEvenElementsWorker(array5))

console.log('-----------------------------------------------------------------')

console.log('Задача 3\n------------------------------------------------------------------------')



// function makeWork(arrOfArr, func) {
//   let arrOfArr = [[array1], [array2], [array3], [array4], [array5]]
//   let maxWorkerResult = -Infinity;
//   func()
// }


console.log('-----------------------------------------------------------------')
