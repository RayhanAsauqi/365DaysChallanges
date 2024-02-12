// Challenge coding 2024
// 8/366
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function DNAtoRNA(dna) {
//   let rna = "";

//   for (let i = 0; i < dna.length; i++) {
//     dna[i] === "T" ? (rna += "U") : (rna += dna[i]);
//   }
//   return rna;
// }

// console.log(DNAtoRNA("GCAT"));

/**
 * Mengonversi sebuah string DNA menjadi RNA.
 * @param {string} dna - String yang akan dikonversi dari DNA menjadi RNA.
 * @returns {string} - String RNA yang dihasilkan setelah konversi.
 */
/**
 * 1. dna adalah parameter yang menerima string DNA yang akan dikonversi menjadi RNA.
 * 2. Fungsi split("T") memecah string dna menjadi array, menggunakan "T" sebagai pemisah. Ini membagi string setiap kali ada huruf "T".
 * 3. Kemudian, fungsi join("U") digunakan untuk menggabungkan kembali array menjadi string,
 *    dengan "U" sebagai pengganti untuk setiap "T". Ini menghasilkan string RNA.
 * 4. Hasil konversi RNA dikembalikan sebagai output dari fungsi.
 */
const DNAtoRNA = (dna) => {
  // Memisahkan string DNA menjadi array menggunakan "T" sebagai pemisah, lalu menggabungkan kembali array dengan "U" sebagai pengganti "T" untuk menghasilkan RNA.
  return dna.split("T").join("U");
};

// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("TCTT"));
