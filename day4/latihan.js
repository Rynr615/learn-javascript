let tanya = true;

while(tanya ) {
    // menangkap pilihan player
    let p = prompt("pilih : gajah, semut, orang");
    // menangkap pilihan komputer
    // generate nomor random
    let comp = Math.random()
    
    if(comp < 0.34) {
        comp = "gajah";
    } else if( comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }
    
    hasil = "";
    
    if(p == comp) {
        hasil = "seri";    
    } else if(p == 'gajah') {
        if(comp == "orang") {
            hasil = "menang";
        } else {
            hasil = "kalah";
        }
    } else if(p == 'orang') {
        if(comp == 'gajah') {
            hasil = "kalah";
        } else {
            hasil = 'menang';
        }
    } else if(p == 'semut') {
        // hasil = (comp == 'orang') ? 'kalah' : 'menang';
        if(comp == 'orang') {
            hasil = 'kalah';
        } else {
            hasil = 'menang';
        }
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }
    
    alert('Kamu memilih : ' +  p + ' dan komputer memilih : ' + comp + '\nMaka kamu : ' + hasil);

    tanya = confirm("lagi???");
}

