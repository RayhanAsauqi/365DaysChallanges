// Challenge coding 2024
// 7/366
//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

// function smash(words) {
//   if (words.length === 0) {
//     return " ";
//   } else {
//     return words.join("");
//   }
// }

/**
 * Menggabungkan array kata menjadi sebuah string.
 * @param {string[]} words - Array kata yang akan digabungkan.
 * @returns {string} - String hasil penggabungan array kata.
 */

// Mengembalikan sebuah string kosong jika array `words` kosong
// atau menggabungkan semua kata dalam array dengan menggunakan spasi sebagai pemisah
const smash = (words) => (words.length === 0 ? " " : words.join(" "));

console.log(smash([]));
