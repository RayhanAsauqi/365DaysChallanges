// Challenge coding 2024
// 7/366
//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

/**
 * Memeriksa apakah mobil memiliki bahan bakar cukup untuk mencapai pompa bensin.
 * @param {number} distanceToPump - Jarak ke pompa bensin dalam mil.
 * @param {number} mpg - Konsumsi bahan bakar mobil dalam mil per galon.
 * @param {number} fuelLeft - Bahan bakar yang tersisa dalam tangki mobil dalam galon.
 * @returns {boolean} - Mengembalikan true jika mobil memiliki bahan bakar yang cukup untuk mencapai pompa bensin, dan false jika tidak.
 */

/**
 * Penjelasan:
 * function zeroFuel mengisi 3 parameter yaitu:
 * 1.distanceToPump(jarak ke pompa bensin)  diukur dalam mil.
 * 2.mpg (konsumsi bahan bakar mobil) diukur dalam mil per galon.
 * 3.fuelLeft (jumlah bahan bakar yang tersisa) diukur dalam galon.
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  //Fungsi akan mengembalikan true jika bahan bakar yang tersisa
  // cukup untuk mencapai pompa bensin dengan jarak distanceToPump, dan false jika tidak cukup.
  distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(100, 50, 1));
