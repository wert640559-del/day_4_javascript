

// // membuat baris bintang vertical
// function garisH(p, n = 5) {
//     for(let i=0; i<n; i++) {
//         let baris = "";
//         for(let k=0; k<5; k++) {
//             for(let j=0; j<p && j%2===0; j++) {  // %= modulus
//                 baris += "*";
//             }
//             baris += "   ";
//             // baris += "---";
//         }
//         console.log(baris);
//     }
// }

// garisH(17, 8);


// function garisHorizontal(jumlah=6, tinggi=8) {
//     for(let i=0; i<tinggi; i++) {
//         let row = "";
//         for(let j=0; j<jumlah; j++) {
//             row += (i%2===0 ? "*" : " ") + " ";
//         }
//         console.log(row);
//     }
// }function garisHorizontal(jumlah=6, tinggi=8) {
//     for(let i=0; i<tinggi; i++) {
//         let row = "";
//         for(let j=0; j<jumlah; j++) {
//             row += (i%2===0 ? "*" : " ") + " ";
//         }
//         console.log(row);
//     }
// }
// garisHorizontal(11, 10);

// // Alphabet E :
// function e(){
//     for (let i = 0; i < 10; i++) {
//         if([0, 1, 4, 5, 8, 9].includes(i)){
//             console.log("");
//         } else{
//             console.log("*");
//         }
//     }
// }
// e();

// // Alphabet L :
// function L(){
//     for (let i = 0; i < 9; i++) {
//         if(i >= 7 && i <= 9){
//             console.log("");
//         } else{
//             console.log("*");
//         }
//     }
// }
// L();

//while (condition) // outputnya adalah boolean, didiisi dengan condition boolean

// let nama = "rits";

// do {                     //lakukan dulu, baru while
//     console.log("ini contoh do while");
//     m++;
// } while (m <= 10);

// let v = 0;
// let c = ;
// function kotak(size = 11) {
//     while (v < size) {
//         for (c < size) {
//             if (v == 0 || )
//         }
//     }

// }

// contoh while
// let i = 0;
// while (i < 10) {
// 	text += "hafalan saya baru " + i + " ayat" + "<br>";
//     i++;
// }



// function calculator() {
// let v1 = parseFloat(prompt("Masukkan nilai 1: ")); // parseFloat gunanya adalah untuk mengkonversi input string menjadi float
// let v2 = parseFloat(prompt("Masukkan nilai 2: ")); // parsefloat digunakan ketika input selain angka
// let operasi = prompt("Masukkan operasi (+, -, *, /): ");
// let hasil;


    
// if (isNaN(v1) || isNaN(v2)) {  // NaN = Not a Number
//     alert("nilai tidak valid");
// } else if (operasi === "/" && v2 === 0) {
//     alert("tidak bisa membagi dengan nol");
// } else {
//     //eksekusi operasi
//     switch (operasi) {
//         case "+":
//             hasil = v1 + v2;
//             break;
//         case "-":
//             hasil = v1 - v2;
//             break;
//         case "*":
//             hasil = v1 * v2;
//             break;
//         case "/":
//             hasil = v1 / v2;
//             break;
//         default:
//             alert("Operasi tidak valid");
//     }
//     // menyimpan hasil operasi
//     let history = [];
//     history.push("hasil dari " + v1 + " " + operasi + " " + v2 + " = " + hasil);

//     document.getElementById("hasil").innerText = "hasil dari " + v1 + " " + operasi + " " + v2 + " = " + hasil;
// }
// }

// function cekwaktushalat(jam) {
//     if (jam >= 4 && jam <= 5) {
//         console.log("waktu subuh");
//     } else if (jam >= 12 && jam <= 13) {
//         console.log("waktu zuhur");
//     } else if (jam >= 15 && jam <= 16) {
//         console.log("waktu asar");
//     } else if (jam >= 18 & jam <= 19) {
//         console.log("waktu maghrib");
//     } else if (jam >= 19 && jam <= 20) {
//         console.log("waktu isya");
//     } else {
//         console.log("bukan waktu shalat");
//     }
// }


// let dataHasil = [];
// let resultElement = document.getElementById('tag11');

// function calculator() {

//     let next = true;

//     do {
//         // INPUT OPERATOR DAN NILAI
//         let operasi = prompt("Masukkan Operasi (+, -, *, /)");
//         let v1 = Number(prompt("Masukkan Nilai 1"));
//         let v2 = Number(prompt("Masukkan Nilai 2"));
//         let hasil;

//         if (isNaN(v1) || isNaN(v2)) {
//             alert("Nilai Tidak Valid");
//         } else if (operasi === "/" && (v2 === 0 || v1 === 0)) {
//             alert("Pembagian Dengan 0 Tidak Diperbolehkan");
//         } else {
//             // EKSEKUSI OPERASI
//             switch (operasi) {
//                 case "+":
//                     hasil = v1 + v2;
//                     break;
//                 case "-":
//                     hasil = v1 - v2;
//                     break;
//                 case "*":
//                     hasil = v1 * v2;
//                     break;
//                 case "/":
//                     hasil = v1 / v2;
//                     break;
//                 default:
//                     alert("Operasi Tidak Valid");
//                     continue; // Skip storing invalid operations
//             }

//             // MENYIMPAN HASIL OPERASI
//             if (hasil !== undefined) {
//                 dataHasil.push("Hasil dari : " + v1 + " " + operasi + " " + v2 + " = " + hasil);
//             }
//         }
//         next = confirm("Apakah Ingin Lakukan Operasi Lagi?");
//     } while (next);

//     if (dataHasil.length > 0) {
//         resultElement.innerHTML = dataHasil.join("<br>");
//     } else {
//         resultElement.innerHTML = "Tidak Ada Hasil";
//     }
// }

// function reset() {
//     dataHasil = [];
//     resultElement.innerHTML = "";
// }


// // function deklaratif
// function example11() { // function berguna untuk
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     let hasil = "ini A = " + a + ", ini B = " + b + ", ini C = " + c;
//     return hasil; // return berguna untuk mengembalikan nilai dari fungsi
// }
// console.log(example11());

// // menggunakan return
// function example12(nama = "bambang") {
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     let hasil = "ini A = " + a + ", ini B = " + b + ", ini C = " + c;
//     return 'helo ' + nama + " anda kurang beruntung";
// }
// console.log(example12());

// let example21 = function example2(nama = "bambang") {
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     let win = true;
//     let hasil = "ini A = " + a + ", ini B = " + b + ", ini C = " + c;
//     return win ?? 'helo ' + nama + " anda kurang beruntung"; // jika win bernilai null atau undefined maka akan mengembalikan nilai setelah ??
// }                                                            // ?? berguna untuk mengecek apakah suatu nilai null atau undefined
// console.log(example21("ujang wakwaw"));

// let example22 = function example2(nama = "bambang") {
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     let win = null;
//     let hasil = "ini A = " + a + ", ini B = " + b + ", ini C = " + c;
//     return win ?? 'helo ' + nama + " anda kurang beruntung";
// }
// console.log(example22("ujang wakwaw"));

// let example23 = function example2(nama = "bambang") {
//     let a = 5;
//     let b = 10;
//     let c = a + b;
//     let win = true;
//     let hasil = "ini A = " + a + ", ini B = " + b + ", ini C = " + c;
//     return win ? "anda menang" : "hallo" + nama + " anda kurang beruntung"; // ? berguna untuk mengecek apakah suatu nilai true atau false
// }
// console.log(example23("ujang wakwaw"));


// // arrow function
// const example31 = (nama) => 'hello $ , youre good';
// console.log(example31("indira"));

// //HOISTING

// // cara balikin nama
// const nama = "HARITS";
// const aman = nama.split('').reverse().join('');
// console.log(aman);


// for (let i = 0; i <= 10; i++) {
//     let baris = "";
//     for (let j = 0; j <= i; j++){
//         baris += " ";
//     }
//     for (let k = 10; k >= i; k--){
//         baris += "**";
//     }
    
//     console.log(baris);
// }

// H A R I T S
for (let i = 0; i <= 4; i++) {
    let baris = "";
    for (let j = 0; j <= 6; j++){
        baris += "*";
    }
    for (let l = 0; l <= 6; l++){
        baris += " ";
    }
    for (let m = 0; m <= 6; m++){
        baris += "*";
    }
    for (let c = 9; c >= i-5; c--){
        baris += " ";
    }
    for (let e = 0; e <= i; e++){
        baris += "*";
    }
    for (let f = 0; f <= i+2; f++){
        baris += "*";
    }

    console.log(baris);
}

for (let a = 0; a <= 2; a++){
    let baris = "";
    for (let b = 0; b <= 20; b++){
        baris += "*";
    }
    for (let c = 9; c >= a; c--){
        baris += " ";
    }
    for (let d = 0; d <= a+6; d++){
        baris += "**";
    }
    console.log(baris);
}

for (let i = 0; i <= 4; i++) {
    let baris = "";
    for (let j = 0; j <= 6; j++){
        baris += "*";
    }
    for (let l = 0; l <= 6; l++){
        baris += " ";
    }
    for (let m = 0; m <= 6; m++){
        baris += "*";
    }
    for (let n = 6; n >= i; n--){
        baris += " ";
    }
    for (let o = 0; o <= 6; o++){
        baris += "*";
    }
    for (let p = 0; p <= i+2; p++){
        baris += "  "
    }
    for (let q = 0; q <= 6; q++){
        baris += "*";
    }
    console.log(baris);
}

for (let i = 0; i <= 6; i++) {
    let baris = "";
    for (let j = 0; j <= 2; j++) { // garis kiri
        baris += "*";
    }
    for (let j = 0; j <= 3; j++) { // bagian bulat R
        if (i === 0 || i === 3) {
            baris += "*";
        } else if (i < 3 && j === 3) {
            baris += "*";
        } else {
            baris += " ";
        }
    }
    if (i > 3) { // kaki miring R
        for (let k = 0; k <= i - 3; k++) {
            baris += "*";
        }
    }
    console.log(baris);
}
