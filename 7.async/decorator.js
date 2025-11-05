


// // Logger-decorator
// function logerDecorator(func) {
    
//     return function (...arr) {
//         console.log(arr);
//         return func(...arr);
//     }
// }
// let summa = function(...args) {
//     let arg = 0;
//      for(let i = 0; i < args.length; i++) {
//          arg+=args[i];
//      }
//          console.log(arg)
// };
// let a = logerDecorator(sum)
// a(2, 3, 4, 5, 6, 7, 8, 9)

// // Декоратор-шпион
// function spyDecorator(func) {
//     let arr = [];
//     function wrapper(...args) {
//         wrapper.history.push(args);
//         return func(...args);
//     }
//     wrapper.history = [];
//     return wrapper;
// }
// let spy = spyDecorator(summa);
// spy(1, 2)

// Кэширующий декоратор

let casche = {};
function sum(a, b) {
    const hash = a + "," + b;
    if(hash in casche) {
        console.log("нашли значение в кэше");
        return casche[hash];
    }
    console.log("вычисляем значение");
    casche[hash] = a + b;
    return casche[hash];
}

function cascheDecorator(func) {
    let casche = {};
    return (...args) => {
        const hash = args.join(',');
        if(hash in casche) {
            return casche[hash];
        }
        const result = func(...args);
        casche[hash] = result;
        return result;
    }
}
sum = (...args) => args.reduce((acc, item) => acc + item, 0);
(...args) => args.reduce((acc, item) => acc + item, 0)
const cashedSum = cascheDecorator(sum);
console.log(cashedSum(654, 845, 864, 254));