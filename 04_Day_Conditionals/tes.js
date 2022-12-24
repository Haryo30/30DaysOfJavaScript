let month = prompt("Masukan bulan anda")
let resultmonth = month.toLowerCase();

if (
  resultmonth == "january" ||
  resultmonth == "march" ||
  resultmonth == "may" ||
  resultmonth == "july" ||
  resultmonth == "august" ||
  resultmonth == "october" ||
  resultmonth == "december"
) {
  console.log(`${resultmonth} has 31 days`);
} else if (
  resultmonth == "april" ||
  resultmonth == "june" ||
  resultmonth == "september" ||
  resultmonth == "november"
) {
  console.log(`${resultmonth} has 30 days`);
} else if (resultmonth == "february") {
  console.log(`${resultmonth} has 28 days`);
}
