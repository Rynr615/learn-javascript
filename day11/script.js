// let userProfile = {
//     id : 1,
//     password : '1234567890',
//     email : 'johdoe@gmail.com',
//     publicProfile : {
//         name : 'John Doe',
//         status : true
//     }
// }

// const {id, username = `undefined`, password, ...publicData} = userProfile;

// console.log(username);

// function luasSegitiga(alas, tinggi) {
//     let hasil = 0.5 * alas * tinggi;
//     return hasil;
// }

// console.log(luasSegitiga(8, 2));

let bangunDatar = {
    segitiga : function(alas, tinggi) {
        let hasil = 0.5 * alas * tinggi;
        return hasil;
    },
    persegi : function(sisi) {
        let hasil = sisi * sisi;
        return hasil;
    },
    persegiPanjang : function(panjang, lebar) {
        let hasil = panjang * lebar;
        return hasil;
    }
}

let panjang = 5;
let lebar = 8;

let hasil = bangunDatar.persegiPanjang(panjang, lebar);
console.log(hasil);