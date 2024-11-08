// manipulasi array
// 1. Menambah array

let arr = ["a", 1, true];
arr[3] = "Helo";
console.log(arr);

// 2. Menghapus isi array
arr[1] = undefined;
console.log(arr);
arr[1] = 1;

// 3. Menampilkan isi array
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Method pada array
// 1. Join ( mengubah nilai array menjadi string )

let arr1 = ["Ryan", "Yanuar", "Pradana"];
// console.log(arr1.join(" "));

// 2. push dan pop
//  - push ( menambahkan array dari belakang )
arr1.push("PILKOM");
console.log(arr1.join(" "));
//  - pop ( menghapus array yang paling belakang )
arr1.pop();
console.log(arr1.join(" "));

// 3. unshift dan shift
// - unshift ( menambahkan di elemen pertama )
arr1.unshift("2405188");
console.log(arr1.join(" "));
// - shift ( menghilangkan elemen pertama )
arr1.shift("2405188");
console.log(arr1.join(" "));

// 4. splice
// menyisipkan elemen array
// splice(indexAwal, mauDiHapusBerapa, elemenBaru, ...);

arr1.splice(1, 0, "d'Arc");
console.log(arr1.join(" "));

// 5. Slice
// slice(awal, akhir);
// slice menghasilkan array yang baru, jadi harus ada sesuatu yang menampungnya
let arr2 = arr1.slice(1,3);
console.log(arr2.join(" "));

// 6. for each
let angka = [3, 5, 7, 21, 5, 10, 9, 8, 1, 4];
let nama = ["Ryan", "d'Arc"];

angka.forEach(function(e) {
    console.log(e);
});

nama.forEach(function(e, i){
    console.log('urutan : ' + i + "\nNama : " + e);
});

// 7. map
// mengembalikan nilai array

let angka2 = angka.map(function(e){
    return e * 2;
});

console.log(angka2.join(" - "));

// 8. sort
// mengurutkan sort

angka.sort(function(a, b){
    return a - b;
});
console.log(angka.join(" - "));

// 9. filter
// mencari nilai dalam array
// dapat mencari banyak nilai dan mengembalikannya dalam bentuk array

let angka3 = angka.filter(function(e){
    return e <= 5;
});
console.log(angka3);

// 10. find
// mencari nilai pertama yang ditemukan, tidak mengembalikannya dalam bentuk array
let angka4 = angka.find(function(e){
    return e <= 5;
});
console.log(angka4);

// 11. concat
// menggabungkan 2 array atau lebih

let cihuy = ['Ryan', 'Yanuar', 'Pradana'];
let cihuy2 = ['Jeanne', "d'Arc"];
let hasil = cihuy.concat(cihuy2);

console.log(hasil);

// 12. spread operator

// a. menyalin array
let array1 = [1, 2, 3];
let array2 = [...array1];
console.log(array2);

// b. menggabungkan array
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

// c. menambahkan array
let tambahArray = [0, ...array1, 4,];
tambahArray.forEach(function(e) {
    console.log(e);
});