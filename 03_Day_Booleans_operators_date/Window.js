// Window Methods

// Window alert() method
alert ('Welcome to 30DaysOfJavaScript')

// Window prompt() method
/**
 * dibungkus melalui atribute file .js jika ingin dimasukan ke file html maka format pertama
 * <script src="path/to/script.js"></script>
 * <button onclick="showPrompt()">Tampilkan Dialog</button>
 * 
 * jika tidak ingin dipanggil dan langsung di file htmlnya saja
 * 
<script type="text/javascript">
  let nama = window.prompt("Masukkan nama Anda:");
</script>
 
 */
let number = prompt()
prompt('required text', 'optional text')

let nama = window.prompt("masukan nama anda");
console.log(nama)

// Window confirm() method
const agree = confirm('Are you sure you like to delete? ')
console.log(agree)