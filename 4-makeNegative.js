/**
 * Fungsi untuk membuat angka menjadi negatif jika belum.
 * @param {number} num - Angka yang akan diubah menjadi negatif jika belum.
 * @returns {number} - Angka negatif dari input num.
 */

function makeNegative(num) {
  // Memeriksa apakah angka sudah negatif, jika ya, maka kembalikan angka tersebut.
  if (num < 0) return num;
  // Jika angka belum negatif, maka ubah menjadi negatif dengan mengalikannya dengan -1.
  return num * -1;
}

console.log(makeNegative(42));
