// while(kondisi) {
//  aksi
// }

let i, x;

// while(i < 5) {
//     console.log("While ke-"+i);
//     i++;
// }

//  latihan

// while(i <= 10) {
//     console.log("Angkot No. "+i+" beroperasi dengan baik.");
//     i++;
// }

//for

let jmlAngkot = 10; let angkotBeroperasi = 6; let noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. "+ noAngkot +" beroperasi dengan baik.");
    noAngkot++;
}

for(let i = noAngkot; i <= jmlAngkot; i++) {
    console.log("Angkot No. "+ i +" tidak beroperasi.");
}