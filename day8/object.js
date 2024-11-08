let mahasiswa = {
    nama : 'Ryan Yanuar Pradana',
    nim : 2405188,
    lulus : false,
    IPSemester : [2.90, 3.1, 3.2, 3.5],
    IPKomulatif : function() {
        let total = 0;
        let ips = this.IPSemester;
        for(let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}

// console.log(mahasiswa.IPKomulatif());

let orang = {
    nama : "Ryan d'Arc",
    umur : 19,
    pekerjaan : 'Mahasiswa',
    // variable yang ada didalam object di namakan dengan properti
    // nama, umur, pekerjaan merupakan properti dari object orang
    sapa : function() {
        return 'Hi, nama saya ' + this.nama + ' usia saya ' + this.umur + ' tahun, dan saya seorang ' + this.pekerjaan;
    },
    // function yang ada didalam object dinamakan dengan method
    alamat : {
        jalan : 'Dr. Husein Kartasasmita',
        kota : 'Banjar',
        provinsi : 'Jawa Barat'
    }
}

console.log(orang.nama);
console.log(orang['nama']);
// bisa gunakan tanda . ( titik ) atau menggunakan kurung siku dan masukkan nama propertinya

console.log(orang.alamat.jalan);
