// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     // alert('cihuyy');
//     const ul = document.querySelector("section#b ul");
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode("Item baru");

//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});


