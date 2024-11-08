// Membuat object
// 1. Object Literal

console.log("===== Object Literal =====");
let mhs = {
    nama : 'Ryan Yanuar Pradana',
    nim : "1234567",
    email : 'ryan@gmail.com',
    jurusan : 'pilkom'
}
console.log(mhs);

console.log('===== Function Declaration =====');
// this mengembalikan object yang bersangkutan  

// 2. Function Declaration

function buatObjectMhs(nama, nim, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

let mhs3 = buatObjectMhs('Ryan', '1234567', 'ryan@gmail.com', 'pilkom');
// this mengembalikan object Global

console.log(mhs3);

console.log("===== Constructor =====");

// 3. Constructor

function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;

}

// jika constructor jangan lupa untuk gunakan 'new'
let mhs4 = new Mahasiswa("Ryan d'Arc", '1234567', 'ryan@gmail.com', 'pilkom');
console.log(mhs4);

// this mengembalikan object yang baru dibuat