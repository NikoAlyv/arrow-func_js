//TODO TASK

//! Part 1

// const great = (say = "Hello")=>{

//     return say;

// }
// console.log(great())
// console.log(great("Nihad"))

//! Part 2
// let factor = 1;
// const factorial = (number) => {
//   if (number > 0) {
//     if (number === 0) {
//       return 1;
//     }
//     factor *= number;
//     number--;
//     factorial(number);
//     return factor;
//   }
// };
// console.log(factorial(9));

//! Part 3
//? using for loop

//  const  sumAll = (...numbers)=>{
//     let sum = 0;
//   for(let i = 0;i<numbers.length;i++){
//           sum+=numbers[i]
//   }
//   return sum
//  }

//  console.log(sumAll(1,2,3,4));

//? without using loop
// let i = 0;
// let sum = 0;
// const sumAll2 =(...numbers)=>{
//     if(numbers.length>i){
//         sum+=numbers[i]
//         i++;
//        sumAll2(...numbers)
//     }
//     return sum
// }
// console.log(sumAll2(1,3,4,5,6));

//! Part 4
//  const first = ()=>{
//     console.log("first message ")
//     second()
//  }

//  const second = ()=>{
//     console.log("second message ")
//     third()
//  }

 const third = ()=>{
    console.log("third message ")
 }

 first()
