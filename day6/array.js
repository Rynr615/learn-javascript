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