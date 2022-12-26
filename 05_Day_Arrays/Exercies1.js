const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 1.
// const arr = Array()
// console.log(arr)

// 2. 
// const elements = [1,'a',2.59,{binatang: ["Kuda", "Ular", "Kerbau"]},{Negara: 'Indonesia', Kota: 'Bekasi'}]
// console.log(elements)

// 3.
// console.log(webTechs.length)

// 4.
// first item
// console.log(countries[0])
// midle item
// length = countries.length
// let midle = Math.floor(length / 2)
// newresult = countries[midle]
// console.log(newresult)
// last item
// let lastitem = countries.length - 1
// result = countries[lastitem]
// console.log(result)

// 5.
// let mixedDataTypes = [1, false, 2.55, {negara: ["Bekasi"]}, {kota: 'Bekasi'}]
// console.log(mixedDataTypes)

// 6. 

let itCompanies = ['Facebook','Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// 7.
// console.log(itCompanies)

// 8.
// console.log(itCompanies.length)

// 9.
// console.log(itCompanies[0]) //first company

// panjang = itCompanies.length
// center = Math.floor(panjang / 2)
// console.log(itCompanies[center])

// let lastcompanies = itCompanies.length - 1
// result = itCompanies[lastcompanies]
// console.log(result) //last company

// 10.
// console.log(itCompanies.toString())

// 11.
// let uppercase = itCompanies.toString(', ')
// let result = uppercase.toUpperCase()
// console.log(result)

// 12.
// console.log(`${itCompanies.toString()} are big IT companies`)

// 13.
// let findCompany = 'FACEBOOK'
// let edit = findCompany.toLowerCase()
// let finaledit = edit.charAt(0).toUpperCase() + edit.slice(1);

// if (finaledit == itCompanies[0]) {
//         console.log('Facebook');
// } else if (finaledit == itCompanies[1])  {
//     console.log(itCompanies[1])
// } else if (finaledit == itCompanies[2])  {
//     console.log(itCompanies[2])
// } else if (finaledit == itCompanies[3])  {
//     console.log(itCompanies[3])
// } else if (finaledit == itCompanies[4])  {
//     console.log(itCompanies[4])
// } else if (finaledit == itCompanies[5])  {
//     console.log(itCompanies[5])
// } else if (finaledit == itCompanies[6])  {
//     console.log(itCompanies[6])
// } else {
//     console.log(`${findCompany} is not found`)
// }

// 14.
// Belum, masih cari tahu

// 15.
// console.log(itCompanies.sort())

// 16.
// console.log(itCompanies.reverse())

// 17.
// console.log(itCompanies.slice(0,3))

// 18.
// console.log(itCompanies.slice(4,7))

// 19.
// console.log(itCompanies.slice(3,4))

// 20.
// itCompanies.splice(0,1)
// console.log(itCompanies)

// 21.
// const length = itCompanies.length;

// if (length % 2 === 1) {
//     itCompanies.splice((length - 1) / 2, 1);
// } else {
//     itCompanies.splice(length / 2 - 1, 1);
// }

// itCompanies.splice(3, 2);

// console.log(itCompanies);

// PSEUDOCODE
/**
 * untuk menghapus nilai di tengah dan menampilkan sisanya
 * caranya dilakukan dengan matematika
 * cari tahu jumlah kalimat
 * tampung dengan variable const untuk tidak diganggu gugat
 * jika jumlah itCompanies yang diketahui dari .length()*7 
 * dan sisa pembagian 7 masih ada angka yang sama dengan hasil yang ditentukan yaitu 1
 * maka mulai dihitung
 * gunakan method splice untuk menghapus index dan memunculkanlahnya lagi
 * dengan perhitungan angka
 * hitung jumlah kalimat itCompanies dikurangin 1
 * hasilnya di bagi dua.
 * hasil dari hitungan tersebut untuk mengambil index
 * untuk memunculkan index selanjutnya berikan tanda `,` dan mulai dari index yang diinginkan
 *  munculkan hasilnya dengan console.log()
 * 
 */

// 22.
// itCompanies.pop()
// console.log(itCompanies)

// 23.
console.log(itCompanies.splice())