let penumpang = [];

let tambahPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i] === namaPenumpang) {
                console.log(namaPenumpang + " sudah ada didalam angkot");
                return penumpang;
            } else if(i === penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length === 0) {
        console.log("Angkot kosong");
        return penumpang;
    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] === namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if( i === penumpang.length - 1) {
                console.log("Nama penumpang tadi tidak ada didalam angkot");
                return penumpang;
            }
        }
    }
}

// console.log(tambahPenumpang("Faris", penumpang));
// console.log(tambahPenumpang("Faris", penumpang));
// console.log(tambahPenumpang("Faisal", penumpang));
// console.log(tambahPenumpang("Cihuyyy", penumpang));

console.log(tambahPenumpang('Ryan', penumpang));
console.log(tambahPenumpang('Rendi', penumpang));
console.log(tambahPenumpang('Syamil', penumpang));
console.log(hapusPenumpang('Syamil', penumpang));
console.log(tambahPenumpang('Faris', penumpang));
console.log(tambahPenumpang('Zahwan', penumpang));
console.log(hapusPenumpang('Syamil', penumpang));

