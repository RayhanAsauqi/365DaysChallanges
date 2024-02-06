// Challenge coding 2024
// 3/366
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

/**
 * Fungsi yang menggunakan metode map() untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function maps(x) {
  //mengembalikan nilai yang sudah di gandakan
  return x.map((n) => n * 2);
}
console.log(maps([1, 2, 3]));

/**
 * Fungsi yang menggunakan forEach() untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function mapsForEach(x) {
  //penampung nilai yang sudah digandakan
  let result = [];
  //melakukan pemetaan agar nilai di dalam array bisa di gandakan
  x.forEach((n) => {
    //memasukan nilai yang sudah di gandakan ke dalam penampung di variabel result
    result.push(n * 2);
  });
  // mengembalikan nilai yang sudah di gandakan
  return result;
}
console.log(mapsForEach([1, 2, 3, 4]));

/**
 * Fungsi yang menggunakan perulangan for untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function mapsFor(x) {
  // membuat penampung nilai
  const result = [];
  // membuat perulangan dari nilai x yang berisi [1,2,3,4] 
  for (let i = 0; i < x.length; i++) {
    //setelah itu index nya kalikan 2 untuk di gandakan
    //setelah itu lakukan push untuk memasukkan nilai nya ke dalam penampung nilainya bernama result
    result.push(x[i] * 2);
  }
  //setelah itu kembalikan nilainya
  return result;
}

console.log(mapsFor([1, 2, 3, 4]));

/**
 * Fungsi yang menggunakan perulangan for-in untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function mapsForIn(x) {
  //buat penampung nilai
  const result = [];
  //setelah itu buat perulangan menggunakan for...in 
  //setelah itu buat variabel index dan menggambil niai dari x
  for (let index in x) {
    //setelah itu kalikan x[index] dengan 2
    //setelah di kalikan / sudah di gandakan langsung masukan nilainya ke dalam variabel penampungnya
    result.push(x[index] * 2);
  }
  //kembalikan nilainya
  return result;
}

console.log(mapsForIn([1, 2, 3, 4]));

/**
 * Fungsi yang menggunakan perulangan for-of untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function mapsForOf(x) {
  //buat penampung nilai 
  const result = [];
  //setelah itu buat perulangan menggunakan for...of
  //setelah itu buat variabel index dan mengambil nilai dari parameter x
  for (let index of x) {
    //setelah itu indexnya di kali 2 untuk di gandakan nilainya
    //setelah sudah di gandakan masukan nilai nya ke dalam variabel penampung 
    result.push(index * 2);
  }
  //kembalikan nilainya
  return result;
}

console.log(mapsForOf([1, 2, 3, 4]));

/**
 * Fungsi yang menggunakan perulangan do-while untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function mapsDoWhile(x) {
  //buat variabel penampung nilai
  let result = [];
  //deklarasi i = 0 
  let i = 0;

  //di dalam do digunakan untuk melakukan perulangannya dan melakukan penggandaan nilai
  //setelah sudah memasukkan niainya yang mau di gandakan selanjutnya melakukan while
  //dimana deklarasi variabel i kurang dari x.length nilai dari panjang parameter yang di masukkan
  do {
    result.push(x[i] * 2);
    i += 1;
  } while (i < x.length);

  //kembalikan nilainya
  return result;
}

console.log(mapsDoWhile([1, 2, 3, 4]));

/**
 * Fungsi yang menggunakan perulangan while untuk menggandakan setiap elemen dalam array.
 * @param {number[]} x - Array angka yang akan diubah.
 * @returns {number[]} - Array baru yang berisi setiap elemen array x yang telah digandakan.
 */
function mapsWhile(x) {
  let result = [];
  let i = 0;

  while (i < x.length) {
    result.push(x[i] * 2);
    i++;
  }

  return result;
}

console.log(mapsWhile([1, 2, 3, 4, 5]));
