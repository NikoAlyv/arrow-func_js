//TODO TASK

//! Part 1

// const great =(say:string = "Hello"):string=>{

//     return say;

// }
// console.log(great())
// console.log(great("Nihad"))

//! Part 2
// let factor:number = 1;
// const factorial=(number:number):number |undefined=> {
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

//  const  sumAll = (...numbers:number[]):number=>{
//     let sum:number = 0;
//   for(let i = 0;i<numbers.length;i++){
//           sum+=numbers[i]
//   }
//   return sum
//  }

//  console.log(sumAll(1,2,3,4));

//? without using loop
// let i:number = 0;
// let sum:number = 0;
// const sumAll2 =(...numbers:number[]):number =>{
//     if(numbers.length>i){
//         sum+=numbers[i]
//         i++;
//        sumAll2(...numbers)
//     }
//     return sum
// }
// console.log(sumAll2(1,2,3,4));

//! Part 4
//  const first = ():void=>{
//     console.log("first message ")
//     second()
//  }

//  const second = ():void=>{
//     console.log("second message ")
//     third()
//  }

//  const third = ():void=>{
//     console.log("third message ")
//  }

//  first()
