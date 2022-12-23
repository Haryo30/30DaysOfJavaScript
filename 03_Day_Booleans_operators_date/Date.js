// Date Object

// https://raw.githubusercontent.com/Haryo30/30-Days-Of-JavaScript/master/images/date_time_object.png

// 1.
const now = new Date()
    // console.log(now)

// 2. Getting full year
console.log(now.getFullYear())

// 3. Getting month
// Get the month as a number (0-11)
console.log(now.getMonth())

// 4. Getting date
// Get the day as a number(1-31)
console.log(now.getDate())

// 5. Getting day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(now.getDay())

// Getting hours
console.log(now.getHours())

// Getting minutes
console.log(now.getMinutes())

// example
console.log(now.getHours() + ":" + now.getMinutes())

// Getting seconds
console.log(now.getSeconds())

// Getting time
// Using getTime()
console.log(now.getTime())

// Using Date.now()
const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

//Example:

const sekarang = new Date()
const tahun = sekarang.getFullYear()
const bulan = sekarang.getMonth()
const tanggal = sekarang.getDate()
const jam = sekarang.getHours()
const menit = now.getMinutes()

console.log(`${tanggal}/${bulan}/${tahun}:${menit}`)

