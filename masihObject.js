// 1. Object Literal
// let mahasiswa = {
//     nama : 'Ryan Yanuar Pradana',
//     nim : '1234567',
//     energy : 10,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         return `Selamat datang ${this.nama}, selamat makan`;
//     }
// }

// console.log(mahasiswa.makan(3));
// console.log(mahasiswa);

// 2. Function declaration

// function Mahasiswa(nama, energy) {
//     let mahasiswa= {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         return `Halo ${this.nama}, selamat makan`;
//     }
    
//     mahasiswa.main = function(jam) {
//         this.energy -= jam;
//         return `Halo ${this.nama}, selamat bermain`;
//     }
//     return mahasiswa;
// }

// let ryan = Mahasiswa('Ryan', 20);

// console.log(ryan.main(6));
// console.log(ryan);

// 3. Constructor
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         return `Halo ${this.nama}, selamat makan`;
//     }
    
//     this.main = function(jam) {
//         this.energy -= jam;
//         return `Halo ${this.nama}, selamat bermain`;
//     }
// }

// let ryan = new Mahasiswa('Ryan', 20);
// console.log(ryan);
// console.log(ryan.main(7));
// console.log(ryan);

// 4. object.create();
const methodMahasiswa = {
    makan : function(porsi) {
        this.energy += porsi;
        return `Halo ${this.nama}, selamat makan`;
    },
    main : function(jam) {
        this.energy -= jam;
        return `Halo ${this.nama}, selamat bermain`;
    },
    tidur : function(jam) {
        this.energy += jam * 2;
    }
}

function Mahasiswa(nama, energy) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    return mahasiswa;
}

let ryan = new Mahasiswa('Ryan', 20);
console.log(ryan);
console.log(ryan.tidur(7));
console.log(ryan);
