// const judul = document.getElementById('judul');

// judul.innerHTML = 'Ryan Yanuar Pradana';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><h2>hello World</h2></div>';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'yellow';

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'RyanYanuar');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.getAttribute('href');
// a.removeAttribute('href');

// const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// p2.classList.remove('label');

// p2.classList.toggle('label');
// p2.classList.toggle('label');

// document.body.classList.toggle('biru-muda');
// document.body.classList.toggle('biru-muda');

// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

// p2.classList.item(2);
// console.log(p2.classList.contains('dua'));

// p2.classList.replace('tiga', 'empat');

// buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Aselole Cihuyyy');
pBaru.appendChild(textPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Aselole Cihuyyy');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';











