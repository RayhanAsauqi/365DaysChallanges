/**
 * Fungsi untuk menghitung jumlah semua bilangan positif dalam sebuah array.
 * @param {number[]} arr - Array angka yang akan dihitung jumlah bilangan positifnya.
 * @returns {number} - Jumlah dari semua bilangan positif dalam array.
 */

function positiveSum(arr) {
  // Variabel untuk menyimpan hasil penjumlahan semua bilangan positif.
  let result = 0;

  // Perulangan untuk menelusuri setiap elemen dalam array.
  for (let i = 0; i < arr.length; i++) {
    // Memeriksa apakah elemen saat ini adalah bilangan positif.
    if (arr[i] > 0) {
      // Jika iya, tambahkan nilai tersebut ke dalam result.
      result += arr[i];
      // Log nilai result saat ini untuk debugging.
      console.log(result);
    }
  }
  // Mengembalikan hasil penjumlahan semua bilangan positif dalam array.
  return result;
}

console.log(positiveSum([1, -10]));
