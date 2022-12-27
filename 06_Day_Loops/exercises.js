// 1.
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// 2.
// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }
// 3.
// for (let i = 5; i >= n; i--) {
//     i = n
//     console.log(i)
// }
// 4.
let number = 7;
let temp = "";

for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
        temp = temp + "#"
    }
    console.log(temp)
    temp = ""
}

/**
 * mengetahui peseudocode dari looping diatas
 * berikan penampung angka 7
 * berikan penampung string
 * 
 * loop jika i = 0 kurang dari 7
 * tambahkan 1 = 0 + 1
 * loop lagi jika j = 0 kurang dari 1
 * tambahkan 1 
 */