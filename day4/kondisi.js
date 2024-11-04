// let angka = prompt("Masukkan angka : ");

// if(angka % 2 === 0) {
//     alert(angka + " adalah angka genap");
// } else if (angka % 2 === 1){
//     alert(angka + " adalah angka ganjil");
// } else {
//     alert(angka + " bukan angka!!!");
// }

// let jmlAngkot = 10; let angkotBeroperasi = 6; let noAngkot = 1;

// for(let i = noAngkot; i <= jmlAngkot; i++) {
//     if(i === 8 || i === 10 || i === 5) {
//         console.log("Angkot No. "+ i +" sedang lembur.");
//     } else if (i <= 6){
//         console.log("Angkot No. "+ i +" beroperasi dengan baik.");
//     } else {
//         console.log("Angkot No. "+ i +" tidak beroperasi.");
        
//     }
// }

// switch(angka) {
//     case "1":
//         alert("Anda memasukkan angka 1");
//         break;
//     case "2":
//         alert("Anda memasukkan angka 2");
//         break;
//     case "3":
//         alert("Anda memasukkan angka 3");
//         break;
//     default:
//         alert("Anda salah memasukkan angka");
//         break;
// }

// let s = '';

// for(let i = 10; i > 0; i--) {
//     for(let j = 0; j < i; j++) {
//         s += "*";
//     }
//     s += "\n";
// }
// console.log(s);

// segitiga pascal

let rows = 5;

for( let i = 0; i < rows; i++) {
    let value = 1;
    let row = '';

    for( let k = 0; k < rows - i - 1; k++ ) {
        row += " ";
    }

    for(let j = 0; j <= i; j++) {
        row += value + " ";
        value = value * (i-j) / (j+1)
    }
    console.log(row);
}
