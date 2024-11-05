function volumeKubus(sisiA, sisiB) {

    let vSisiA = sisiA*sisiA*sisiA;
    let vSisib = sisiB*sisiB*sisiB;

    let hasil = vSisiA + vSisib;

    return hasil;
}

console.log(volumeKubus(8, 3))

// function coba() {
//     return arguments;
// }

// let nyoba = coba(5, 6, 8, 'hi', true);

// console.log(nyoba);

// rekursif

function faktorial(n) {
    if(n === 0) {
        return 1;
    }

    return n * faktorial(n - 1);
}

console.log(faktorial(5))

function fibonacchi(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fibonacchi(n - 1) + fibonacchi(n - 2);
}

console.log(fibonacchi(6));

// function expression

let tampilPesan = function (nama) {
    console.log(nama);
}

tampilPesan("Ryan");
