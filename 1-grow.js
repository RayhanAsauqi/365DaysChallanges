// Challenge coding 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

/**
 * Fungsi untuk mengalikan semua elemen dalam sebuah array.
 * @param {number[]} x - Array angka yang akan dikalikan.
 * @returns {number} - Hasil perkalian semua elemen dalam array.
 */
// function grow(x) {
//   // Menggunakan metode reduce untuk mengalikan semua elemen dalam array.
//   return x.reduce((acc, curr) => acc * curr, 1);
// }

// console.log(grow([1, 2, 3])); // 6
// console.log(grow([4, 1, 1, 1, 4])); // 16
// console.log(grow([2, 2, 2, 2, 2, 2])); // 64

function grow(x) {
  // Menginisialisasi variabel result dengan nilai dari elemen pertama dalam array x.
  let result = x[0];
  // Perulangan untuk mengalikan semua elemen dalam array, dimulai dari elemen kedua
  for (let i = 1; i < x.length; i++) {
    // Kemudian, pada setiap iterasi, nilai result akan dikalikan dengan elemen array pada indeks i
    result *= x[i];
  }
  //kembalikan nilai nya
  return result;
}

console.log(grow([1, 2, 3, 4])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16

// const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
// console.log(grow([1, 2, 3, 4])); // 6
// console.log(grow([4, 1, 1, 1, 4])); // 16
