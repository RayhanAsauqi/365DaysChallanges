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

const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
 console.log(grow([1, 2, 3, 4])) // 6
 console.log(grow([4, 1, 1, 1, 4])) // 16