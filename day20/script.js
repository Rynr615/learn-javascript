// const cls = document.querySelector('.close');
// const card = document.querySelector('.card');

// cls.addEventListener('click', function() {
//     card.style.display = 'none';
// });


// DOM Traversal

const cls = document.querySelectorAll('.close');

// for(let i = 0; i < cls.length; i++) {
//     cls[i].addEventListener('click', function(e) {
        // cls[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

cls.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});

const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextSibling);
console.log(nama.nextElementSibling);


