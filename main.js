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