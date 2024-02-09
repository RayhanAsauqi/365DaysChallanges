// Challenge coding 2024
// 7/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// function hero(bullets, dragons) {
//   if (bullets >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

/**
 * Memeriksa apakah pahlawan memiliki cukup peluru untuk mengalahkan semua naga.
 * @param {number} bullets - Jumlah peluru yang dimiliki oleh pahlawan.
 * @param {number} dragons - Jumlah naga yang harus dikalahkan oleh pahlawan.
 * @returns {boolean} - True jika pahlawan memiliki cukup peluru untuk mengalahkan semua naga, dan False jika tidak.
 */

//Mendefinisikan fungsi hero dengan dua parameter: bullets (jumlah peluru) dan dragons (jumlah naga).
//Memeriksa apakah jumlah peluru dibagi dua lebih besar dari atau sama dengan jumlah naga. Jika ya, maka pahlawan memiliki cukup peluru untuk mengalahkan semua naga.
//Mengembalikan nilai boolean berdasarkan hasil perbandingan.
const hero = (bullets, dragons) => bullets / 2 >= dragons;

// Contoh pemanggilan fungsi
console.log(hero(1500, 751));
