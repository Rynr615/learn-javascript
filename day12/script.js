// prototype

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energy += porsi;
//         return `Halo ${this.nama}, selamat makan`;
//     },
//     main : function(jam) {
//         this.energy -= jam;
//         return `Halo ${this.nama}, selamat bermain`;
//     },
//     tidur : function(jam) {
//         this.energy += jam * 2;
//     }
// }

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     return mahasiswa;
// }

console.log("===== versi prototype =====");

// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy = jam * 2;
//     return `Halo ${this.nama}, selamat tidur`;
// }
// let ryan = new Mahasiswa('Ryan', 10);

// console.log(ryan)

console.log("===== versi class =====");
class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        return `Halo ${this.nama}, selamat makan`;
    }

    main(jam) {
        this.energy -= jam;
        return `Halo ${this.nama}, selamat bermain`;
    }

    tidur(jam) {
        this.energy = jam * 2;
        return `Halo ${this.nama}, selamat tidur`;
    }
}

let ryan = new Mahasiswa('Ryan', 10);
let rendi = new Mahasiswa('Rendi', 12);
