function getPilihanComputer() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`);
        if( i == gambar.length) i = 0;
        
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanKomputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        // console.log(`comp : ${pilihanKomputer}`);
        // console.log(`player : ${pilihanPlayer}`);
        
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);
        putar();
        // console.log(`hasil : ${hasil}`);
        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', `img/${pilihanKomputer}.png`);
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    });
});

// const pGajah = document.querySelector('.gajah');

// pGajah.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     // console.log(`comp : ${pilihanKomputer}`);
//     // console.log(`player : ${pilihanPlayer}`);
    
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // console.log(`hasil : ${hasil}`);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', `img/${pilihanKomputer}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     // console.log(`comp : ${pilihanKomputer}`);
//     // console.log(`player : ${pilihanPlayer}`);
    
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // console.log(`hasil : ${hasil}`);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', `img/${pilihanKomputer}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     // console.log(`comp : ${pilihanKomputer}`);
//     // console.log(`player : ${pilihanPlayer}`);
    
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     // console.log(`hasil : ${hasil}`);
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', `img/${pilihanKomputer}.png`);

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

