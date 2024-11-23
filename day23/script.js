const tinggi = document.getElementById('tinggi');
const berat = document.getElementById('berat');
const btn = document.getElementById('submit');
const hasil = document.querySelector('.hasil')

btn.addEventListener('click', function(e) {
    e.preventDefault();

    while (hasil.firstChild) {
        hasil.removeChild(hasil.firstChild);
    }

    const tinggiBadan = parseFloat(tinggi.value) / 100;
    const beratBadan = parseFloat(berat.value);

    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    let kategori = "";
    
    if(bmi < 18.5) {
        kategori = "Kurus";
    } else if(bmi >= 18.5 && bmi < 24.9) {
        kategori = "Normal";
    } else if(bmi > 25 && bmi < 29.9) {
        kategori = "Gendur";
    } else {
        kategori = "Obesitas";
    }

    const bmiText = document.createTextNode(`BMI anda ${kategori}`)
    hasil.style.color = "white";
    hasil.appendChild(bmiText);
    
});