/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */

function printArgs(...arraw) {
  console.log(arraw);
}
printArgs(1, 5, 2, 6, 9, 4, 7, 8)

function showTarif(name, ...advantages) {
  console.log(`Тариф: ${name}`)
  for (let i = 0; i < advantages.length; i++) {
    console.log(` - ${advantages[i]}`);
  }
}
// showTarif("Базовый", "кровать на чердаке", "беседы с дядей Ваней");
// showTarif("Премиум", "кровать на чердаке", "беседы с дядей Ваней", "Кофе в постель", "Раздельный санузел");

// console.log("Summa = ", sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(typeof sum);
// console.log(sum.name);

// function sum(...args) {
//   let sum = 0
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(args)
//   return sum
// }


// let com = function (...ton) {
//   let coma = 1
//   for (let i = 0; i < ton.length; i++) {
//     coma *= ton[i]
//   }
//   console.log("Введен массив - ", ton)
//   return coma
// }
// console.log(com(2, 3, 4))


// console.log(com.name)


// var userName = "Alex"
// let user = {
//   name: 'Peter',
//   getName: function () {
//     return user.name
//   }
// }
// user.getName()


// let data = ['Возраст', "Рост", "Вес"]
// function printName(firstName, secondName, ...array) {
//   console.log(`Имя - ${firstName}`)
//   console.log(`Фамилия - ${secondName}`)
//   for (let i = 0; i < array.length; i++) {
    
//     console.log(data[i], ` - ${array[i]}`)
//   }
  
// }
// printName("Nikolay", "Ershov", 53, 188, 103)


// function execute() {
//   function hello() {
//     console.log("Hello");
//   };
//   return hello()
// }

// execute()

// function counterGenerator() {
//   let count = 0
//   function printCounter() {
//     console.log(count)
//   }
//   function incrementCounter() {
//     count++;
//   }

//   return [printCounter, incrementCounter];
// }

// let customCounter = counterGenerator();

// Самовызывающаяся функция



let result = (function () {
  let count = 0;
  function printCounter() {
    console.log(count);
  }
  function incrementCounter() {
    count++;
  }

  return [printCounter, incrementCounter];
})()


// Задание
function printArray(arr) {
  let min = arr[0];
  let max = arr[0];
  let average = 0;
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    };
    if (max < arr[i]) {
      max = arr[i]
    }
    sum += arr[i]
    
    average = sum / (i + 1)
  }
  console.log('sum = ', sum)
  console.log('min = ', min);
  console.log("max = ", max);
  console.log("average = ", average);
  console.log('array = ', array);
}

let array = []
let y = 0

lengthArray = Number(prompt('Введите длину массива '))

while (y < lengthArray) {
  a = Number(prompt("Введите число"));
  array.push(a);
  y += 1;
}
printArray(array);







