// Challenge coding 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// function grow(x){
//     return x.reduce((acc, curr) => acc * curr, 1 )
// }

// console.log(grow([1, 2, 3])) // 6
// console.log(grow([4, 1, 1, 1, 4])) // 16
// console.log(grow([2, 2, 2, 2, 2, 2])) // 64

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// console.log(grow([1, 2, 3, 4])) // 6
// console.log(grow([4, 1, 1, 1, 4])) // 16

// const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
// console.log(grow([1, 2, 3, 4])); // 6
// console.log(grow([4, 1, 1, 1, 4])); // 16

// function makeNegative(num) {
//   if (num < 0) return num;
//   return num * -1;
// }

// console.log(makeNegative(42));

// function positiveSum(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result += arr[i];
//       console.log(result);
//     }
//   }
//   return result;
// }

// console.log(positiveSum([1, 2, -4, -1, -3, -4]));


