//Statement and Expresion

const age=26;
const nama='Lily Naibaho'
console.log(`Namaku ${nama}, umurku ${age} Tahun`);
// age dan nama dalam javascript disebut dengan statement (age and nama on javascript are called as "Statement")
//sedangkan 26 and Lily Naibaho disebut dengan Expression/Value on a statement 
//(Meanwhile, 26 and Lily Naibaho are called as "Expression on Javascript")


/*Sekarang kita akan bahas tentang Comment
ini adalah project Js Lily Naibaho
Tanggal 19 September 2024 
(Whatever your decisions are, you know yourself better. So keep going :) )
*/
console.log('Hai Readers');
console.log('Hai Javascript');
//console.log('Hai Lily');
const PI=3.14;
console.log(PI);
console.log('Hai Lily Naibaho, terima kasih ya sudah mau belajar, i am proud of you')


/* Variable
Variable adalah tempat menampung suatu nilai, nilainya bisa berupa apa saja
baik berupa teks, angka dan lain sebagainya. 
Cara menuliskan variable dalam javascript ada 2 cara yaitu dengan sintaks "const" atau "let"

Apa bedanya const dan let????

Dalam javascript , kamu tidak bisa mengubah value/menginisialisasi ulang value dari sebuah variable
jika variable tsb di buat dengan sintaks "const"
sedangkan dengan "let" , kamu bisa menginisialisasi ulang nilai dari sebuah variable
contoh:
*/
const username ='Lily Naibaho';
let email ='lilyanastasia75@gmail.com';
email='lilynaibaho@gmail.com'
//username='Lily' => ini tidak boleh diinisialisasi ulang ya valuenya, karena variablenya dibuat dengan sintasks "const"
console.log(username);
console.log(email);


/*Aturan penamaan Variable
1. Tidak boleh menggunakan nama variable yang sama dalam satu function
Contoh:*/
//Get data employee
const name='Lily';
const umur='26';
//Get data Device
//const name='Macboock M2';  ->>>> const name='Macboock M2'; SyntaxError: Identifier 'name' has already been declared
const year='2021';

/*Jika ingin menggunakan variable dengan nama yang sama , maka tempatkan variable tersebut pada dua function yang berbeda
Contoh: */

function printEmployeeData(){
    const name='Lily Naibaho';
    const umur=26
    
    console.log('Nama saya: ',name);
    console.log('Umur saya: ',umur);
}

function printDeviceData(){

    const name='Macboock M2';
    const year=2022;

    console.log('Device yang saya gunakan untuk bekerja: ',name);
    console.log('Keluaran tahun: ',year);
}
printEmployeeData();
printDeviceData();

/* 2. Untuk menuliskan nama variable, variable hanya boleh terdiri dari angka,huruf, underscore, dan dollar ($) saja*/
//Contoh yang benar
const firstName='Lily';
const last_name='Naibaho';
const $message='Semangat belajarnya anak baik';
const userId1=123;

console.log(firstName,last_name,$message,userId1);


//Contoh yang salah
//const 1userid='123'; //SyntaxError: Invalid or unexpected token
//const @message='Jangan Menyerah'; //SyntaxError: Invalid or unexpected token
//const last name='Naibaho'; //SyntaxError: Invalid or unexpected token
//const tinggi-badan='163 cm';//SyntaxError: Invalid or unexpected token

//3. Nama variable tidak boleh diawali dengan angka
//const 1userid='123' //SyntaxError: Invalid or unexpected token

/*Tanggal: 23 September 2024
Hari belajar tentang Tipe data, Tipe data dalam Javasscript ada beberapa diantaranya string,number, boolean,dan null (tipe data dengan nilai kosong)
Tipe data tersebut disebut sebagai tipe data primitif*/
/*String
string adalah tipe data yang nilainya berupa teks, biasa digunakan untuk data nama, alamat, email dan lain"
Biasanya nilai dari tipe data string diapit oleh 2 tanda kutip, tanda kutip dalam js untuk menggambarkan 
data tipe string ini ada 3 jenis yaitu kutip dua ("")/double quote, kutip satu('')/single quote, dan tanda backtikcs (``)
contoh:*/
let tulisan="Ini adalah Javascript";
tulisan='Ini adalah Javascript';
tulisan=`Ini adalah Javascript`;
/*Hampir semua character bisa ditulis langsung dalam diantara tanda kutip, namun beberapa diantaranya memerlukan perlakuan khusus 
misalnya baris baru (untuk menggambarkan kita sedang menekan button enter pada keyboard). Baris baru hanya dapat dituliskan langsung dengan 
menggunakan kutip backticks, untuk kutip tunggal dan dua perlu ada tambahan \n seperti ini*/

let baris="Baris Pertama \nBaris Kedua";
baris='Baris satu \nBaris Kedua';
baris=`Baris satu 
Baris Dua`;

/*Selain itu kutip Backticks ini disebut template literal dimana memungkinkan kita untuk menyisipkan javascript expression  untuk
membentuk nilai string menggunakan character ${}*/
const currentYear= new Date().getFullYear();
const text=`Sekarang adalah tahun ${currentYear}`;

console.log(text);
/* tipe data number
semua data yang berupa angka dipresentasikan dengan tipe data number, baik itu bilangan bulat atau pecahan.
Dengan tipe data number maka kita hanya perlu menuliskan angkanya saja tanpa ada karakter khusus
Berikut contoh nilai dalam javascript*/
let angka=40;
angka=3.333;
angka=3;
/*selain angka normal, tipe data number juga memiliki nilai spesial , infinity dan NaN
Nilai infinity jika melakukan operasi aritmatika yang nilainya tidak terdefinisi, misal pembagian dengan angka 0*/
const hasil=50/0;
console.log(hasil);//Ouputnya infinity

/*sedangkan NaN(Not a Number) dihasilkan ketika nilai non numerik diubah tipe datanya ke tipe data number
contohnya mengubah nilai string menjadi number , maka akan muncul outputnya NaN*/
const result=Number('dicoding');
console.log(result);//Outputnya NaN

/*Boolean
boolean adalah tipe data yang hanya punya dua nilai yaitu True and False , biasanya untuk mereprestasikan nilai ya dan tidak*/
const completed=true;
const failed=false;
console.log(completed, failed);
//selain itu boolean juga bisa dihasilkan dengan penggunaan operator perbandingan pada matematika 
const isGreater = 5>2;
const isLess=5<2;
const isSame=5<=5;
console.log(isGreater,isLess,isSame);

/*Nilai kosong atau NULL
Dalam javascript untuk menunjukkan bahwa sebuah variabel tidak memiliki nilai dapat menggunakan 2 nilai ini
yaitu null dan undefined. Tidak hanya di javascript null juga di semua bahasa pemograman memberikan pengertian bahwa
variable tersebut tidak memiliki nilai. Untuk memberikan nilai null dapat dilakukan dengan menulis sintaks "null"
contoh*/
let message=null;
console.log(message);//Outputnya : null

/*sedangkan undefined menggambarkan bahwa variable tersebut tidak menginisialisasi nilai apapun
Misal:*/
let pesan;
console.log(pesan);//outputnya undefined

/*terlihat sama , undefined dan null memang memiliki kesamaan kegunaan yaitu memberikan nilai kosong pada suatu
variable, namun keduanya sebenarnya berbeda
Contoh:*/
const Baca1={first:'Dicoding',second:null};
const Baca2={first:'Dicoding',second:undefined};
console.log(JSON.stringify(Baca1));//Output: {"first":"Dicoding","second":null}

console.log(JSON.stringify(Baca2));//Output: {"first":"Dicoding"}

/*dari dua contoh tersebut terlihat bahwa undefined tidak ditampilkan ketika diubah ke bentuk JSON karena undefined ini tidak
didukung oleh JSON, oleh karena itu mengapa null lebih standard digunakan*/

/*Mengubah Nilai Antar tipe data
Ketika mengelola data dengan JS dibutuhkan kondisi dimana kita perlu mengubah nilai dari suatu tipe data ke tipe data lain
Kita perlu menyesuaikan tipe data untuk kebutuhan tertentu atau konteks tertentu seperti perhitungan, perbandingan, dan manipulasi
data. Dalam JS hal ini dapat dilakukan, dengan mengkoversi tipe data dan itu 
dapat mempermudah developer untuk menuliskan kode program yang efisien.
JS itu punya berbagai macam cara untuk mengkonversikan tipe data, sebagai developer penting untuk kita memahami cara konversi tipe data 
dgn tujuan supaya kita dapat menuliskan kode program yang efisien
*/
/*Konversi Eksplisit
sintaks yang terlihat jelas  untuk mengonversi nilai dari sebuah variable dari tipe data satu ke tipe data lainnya dan sering
digunakan oleh developer

A. Mengubah ke String
untuk mengubah suatu nilai ke string, dapat dilakukan dengan 2 cara yaitu fungsi string() atau .toString()
contoh
*/
const number1 = 123;
const boolean=true;
const strNumber=String(number1);
const strBoolean=boolean.toString();

console.log(strNumber);//Output: 123;
console.log(strBoolean);//output: "true"
/*26/09/2024
ketika ingin mengubah suatu nilai ke string dengan menggunakan function String()->ada nama variable yang akan diubah di dalam kurung
misal String(number1);
Untuk toString() function adalah metode yang tersedia dalam beberapa tipe data termasuk boolean yang digunakan untuk mengubah
nilai string sesuai dengan referensi nilainya
misal: boolean.toString();
*/

/*Mengubah ke Number
untuk mengubah nilai ke bentuk numerik, dapat dilakukan dengan menggunakan function Number()
contoh*/
const strFloat='3.14';
const angka2='23';
const boolean1=false;

const stringToNum=Number(angka2);
const stringToFloat=Number(strFloat);
const booleanToNum=Number(boolean1);

console.log(stringToNum);
console.log(stringToFloat);
console.log(booleanToNum);

/*selain menggunakan number , function parseInt() juga dapat digunakan untuk ubah tipe data string ke angka
Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. Ketika menemukan karakter yang tidak bisa
 diubah menjadi angka, proses konversi terhenti di sana . Dengan kemampuan ini maka dapat mengubah nilai string 
 "20CM" dan "64PX"
 */
const cm='20CM';
const px='64PX';

const stringToCm=parseInt(cm);
const stringToPx=parseInt(px);

console.log(stringToCm);
console.log(stringToPx);

//Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). 
const cm2='20.55cm';
const px2='64.23px';

const floatFromCM = parseFloat(cm2);
const floatFromPX = parseFloat(px2);

console.log(floatFromCM);
console.log(floatFromPX);


/*Mengubah nilai ke boolean
mengubah suatu nilai ke tipe boolean , kita bisa gunakan function boolean()
*/
const number001=123;
const string001='Dicoding';
const empty =null;

const boolFromNumber = Boolean(number001);
const boolFromString = Boolean(string001);
const boolFromNull = Boolean(empty);

console.log(boolFromNull);
console.log(boolFromNumber);
console.log(boolFromNumber);
/*Hampir seluruh nilai yang ada sifatnya truthy, hanya segelintir nilai yang sifatnya falsy. Berikut adalah daftar nilai falsy dalam JavaScript.
false
0
-0
0n
''
null
undefined
NaN*/

/*Konversi Implisit
Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. 
Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika.*/
const umur1=20;
const pesan1='Umurku '+umur1;
console.log(pesan1);
/*Dalam contoh ini, tipe data number (age) secara otomatis dikonversi menjadi string karena operator + digunakan untuk penggabungan string.*/
const strNumber1='123';
const hasilnya=strNumber1 * 2;

console.log(hasilnya);

/*Dalam contoh ini, strNumber (yang merupakan string) dikonversi menjadi number karena operator * digunakan untuk operasi aritmetika.
contoh lain yaitu penggunaan operasi aritmatika untuk mengubah boolean menjadi number*/

const bool1=true;
const hasil2=bool1+1;
console.log(hasil2);
