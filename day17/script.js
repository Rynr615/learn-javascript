const gantiWarna = document.getElementById('gantiWarna');

gantiWarna.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda')
});

const tombolBaru = document.createElement('button');
const textTombolBaru = document.createTextNode('Acak Warna');
tombolBaru.appendChild(textTombolBaru);
tombolBaru.setAttribute('type', 'button');
gantiWarna.after(tombolBaru);

tombolBaru.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

