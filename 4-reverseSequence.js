// Challenge coding 2024
// 4/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

/**
 * Fungsi untuk membuat urutan angka terbalik dari n hingga 1.
 * @param {number} n - Jumlah angka dalam urutan.
 * @returns {number[]} - Urutan angka terbalik dari n hingga 1.
 */
function reverseSeq(n) {
  //penampung angka terbalik
  const resultReversed = [];

  // Memasukkan angka-angka terbalik ke dalam array.
  for (let i = n; i >= 1; i--) {
    //melakukan push indexnya yang sudah terbalik kedalam penampung array resultReversed
    resultReversed.push(i);
  }
  //   kembalikan nilai array nya keluar
  return resultReversed;
}
console.log(reverseSeq(5));

//refactor
const reverseInFuncJs = (n) => {
  // pertama membuat array dengan panjang ke n,diman setiap element awalnya undefined
  //kemudian menggunakan method fill() untuk mengisi array dengan undefined
  // Array ini kemudian akan digunakan untuk membuat urutan angka
  return (
    Array(n)
      .fill()
      // Menggunakan map() untuk mengubah setiap elemen array menjadi nilai i + 1.
      // i adalah index elemen saat ini.
      .map((element, i) => (i += 1))
      // Menggunakan reverse() untuk membalik urutan elemen dalam array.
      // Sehingga urutan angka menjadi terbalik dari n hingga 1.
      .reverse()
  );
};

console.log(reverseInFuncJs(5));
