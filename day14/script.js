// // DOM selection
// // getElementById()

// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = "Sandhika";

// // document.getElementsByTagName() 

// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];

// h1.style.fontSize = '50px';

// // document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = "Di ubah dari js";

// document.querySelector()

// const p4 = document.querySelector('#b p');

// p4.style.color = 'green';
// p4.style.fontSize = '50px';


const li2 = document.querySelector('section#b ul li:nth-child(2)');

li2.style.backgroundColor = 'green';

// const p = document.querySelector('p');

// p.innerHTML = 'ini dari js';

// document.querySelectorAll()

const p = document.querySelectorAll('p');

for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');

p4.style.backgroundColor = 'orange';

