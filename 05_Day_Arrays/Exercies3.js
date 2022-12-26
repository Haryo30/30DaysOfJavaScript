// 1.
// A.
const ages = [19, 19, 26, 25, 20, 25, 26, 24, 25, 24];
const max = Math.max(...ages);
const min = Math.min(...ages)
console.log(min);

// B.
// const sortedAges = ages.sort()
// const middleIndex = Math.floor(sortedAges.length / 2)

//     medianAge = (sortedAges[middleIndex] + sortedAges[middleIndex + 1]) / 2

// console.log(medianAge);

/**
 * Pertama
 * untuk mengetahui rata rata umur dari variable index diatas
 * urutkan setiap angka yang ngacak di variable index ages
 * buat variable middleIndex untuk menghitung rata rata angka terdekat
 * dari pembagian jumlah element array bagi 2
 * hasil dari pembagian dihitung lagi dengan berbeda variable
 * buat variable lagi dari pembagian middleIndex dengan dihitung index ages
 * yang sudah dihitung di variable middleIndex dengan perhitungan
 * index ages tambah index ages tambah 1 hasil di bagi dua
 * munculkan di console.log()
 */

// C.
let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}
let deta = ages.length
let result = sum / deta
console.log(result);

/**
 * i sama dengan 0
 * jika 0 kurang dari 10 tambahkan 10
 * jika 0 kurang dari 9 tambahkan 9
 * jika 0 kurang dari 8 tambahkan 8
 * jika 0 kurang dari 7 tambahkan 7
 * jika 0 kurang dari 6 tambahkan 6
 * jika 0 kurang dari 5 tambahkan 5
 * jika 0 kurang dari 4 tambahkan 4
 * jika 0 kurang dari 3 tambahkan 3
 * jika 0 kurang dari 2 tambahkan 2
 * jika 0 kurang dari 1 tambahkan 1
 * jika 0 sama dengan 0 berhenti
 */

// D.
// console.log(max - min)

// E.
const country = require('./05_day_starter/countries')
// console.log(min - result);
// console.log(max - result);
// let firstCountries = country.slice(0, Math.abs(10))
// console.log(firstCountries)

// 2.
// const sortedCountry = country.sort()
// const middleIndex = Math.floor(sortedCountry.length / 2)

// let MediaCountry = (sortedCountry[middleIndex] + ' ' + sortedCountry[middleIndex + 1])
// console.log(MediaCountry)

let middleIndex = Math.floor(country.length /2);
let firsthalf = country.slice(0, middleIndex);
let secondhalf = country.slice(middleIndex)

// console.log(firsthalf);
console.log(secondhalf);