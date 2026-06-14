/* === 1. LOGIKA MENU NAVIGASI HP (HAMBURGER MENU) === */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}


/* === 2. LOGIKA ANIMASI TUMPUKAN LOGO (HERO SECTION) === */
let maxZIndex = 10; 

document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
        maxZIndex++;
        card.style.zIndex = maxZIndex;
        card.style.animationPlayState = 'paused';
        
        card.style.transform = `scale(1.15)`;
        card.style.boxShadow = "0 25px 50px rgba(0,0,0,0.3)"; 
        
        setTimeout(() => {
            card.style.transform = `scale(1) rotate(0deg)`; 
            card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)"; 
            card.style.animationPlayState = 'running'; 
        }, 350);
    });
});


/* === 3. LABORATORIUM: MEMORI & VARIABEL === */
const typeInput = document.getElementById('type-input');
const typeResult = document.getElementById('type-result');

typeInput.addEventListener('input', function() {
    const val = this.value.trim();
    
    if (val === '') { 
        typeResult.innerHTML = 'Sistem standby. Menunggu masukan data ke memori...'; 
        return; 
    }

    let tipe; 
    
    if (val.toLowerCase() === 'true' || val.toLowerCase() === 'false') {
        tipe = 'bool (Logika Biner 1 / 0)'; 
    } else if (!isNaN(val) && val !== '') {
        tipe = val.includes('.') ? 'float (Angka Pecahan)' : 'int (Angka Bulat)';
    } else {
        tipe = 'string (Untaian Teks)'; 
    }

    typeResult.innerHTML = 
        `Data Masuk: "${val}"<br><br>` +
        `> Deklarasi Tipe Data C++ : <strong style="color:var(--putih-murni)">${tipe}</strong>`;
});


/* === 4. LABORATORIUM: MESIN KALKULATOR (OPERATOR) === */
function calculate() {
    const num1 = parseFloat(document.getElementById('calc-num1').value);
    const num2 = parseFloat(document.getElementById('calc-num2').value);
    const op = document.getElementById('calc-op').value; 
    const res = document.getElementById('calc-result'); 

    if (isNaN(num1) || isNaN(num2)) { 
        res.innerHTML = "[ERROR SYSTEM]: Input bukan angka valid."; 
        return; 
    }

    let hasil;
    
    if (op === '+') hasil = num1 + num2;
    else if (op === '-') hasil = num1 - num2;
    else if (op === '*') hasil = num1 * num2;
    else if (op === '/') hasil = num2 !== 0 ? (num1 / num2).toFixed(2) : "[FAIL]: Mustahil membagi dengan Nol!";
    else if (op === '%') hasil = num2 !== 0 ? num1 % num2 : "[FAIL]: Modulo nol tidak terdefinisi!";

    let lebihBesar = (num1 > num2) ? "Benar (true / 1)" : "Salah (false / 0)";
    let samaDengan = (num1 === num2) ? "Benar (true / 1)" : "Salah (false / 0)";

    res.innerHTML = `<strong>1. EKSEKUSI ARITMATIKA</strong><br>` +
                    `> Instruksi ALU: [ ${num1} ] ${op} [ ${num2} ]<br>` +
                    `> Hasil Kalkulasi : <strong style="color:var(--putih-murni); font-size:1.2rem;">${hasil}</strong><br><br>` +
                    `<strong>2. EVALUASI PERBANDINGAN</strong><br>` +
                    `> Apakah ${num1} > ${num2}? <strong>${lebihBesar}</strong><br>` +
                    `> Apakah ${num1} == ${num2}? <strong>${samaDengan}</strong>`;
}


/* === 5. LABORATORIUM: PENGKONDISIAN/PERCABANGAN === */
function checkSuhu() {
    const input = document.getElementById('suhu-input').value;
    const res = document.getElementById('suhu-result');
    
    if(input === '') { res.innerHTML = "[WARN]: Masukkan nilai angka sensor."; return; }

    const suhu = Number(input); 
    let wujud = ''; 

    if (suhu <= 0) {
        wujud = 'Padat (Kristal Es)'; 
    } else if (suhu >= 100) {
        wujud = 'Gas (Uap Air)'; 
    } else {
        wujud = 'Cair (Liquid)'; 
    }

    res.innerHTML = `> Mengeksekusi blok IF-ELSE dengan parameter suhu = ${suhu} <br>` +
                    `> Kondisi Terpenuhi. Status Materi Fisik : <strong style="color:var(--putih-murni)">${wujud}</strong>`;
}


/* === 6. LABORATORIUM: PERULANGAN (LOOPING) === */
function runLoop() {
    let count = document.getElementById('loop-input').value;
    const container = document.getElementById('loop-result');
    
    if(count > 25) count = 25; 
    if(count < 1) count = 1;

    container.innerHTML = ''; 
    
    for (let i = 1; i <= count; i++) {
        setTimeout(() => {
            const box = document.createElement('div');
            box.className = 'loop-box';
            box.innerText = i; 
            container.appendChild(box);
        }, i * 150); 
    }
}


/* === 7. LABORATORIUM: PEMANGGILAN PROSEDUR (VOID) === */
function runProcedure() {
    const input = document.getElementById('proc-input').value;
    const res = document.getElementById('proc-result');

    if(input.trim() === '') { 
        res.innerHTML = "[WARN]: Masukkan teks terlebih dahulu."; 
        return; 
    }

    // Prosedur hanya melakukan aksi (mencetak) secara langsung, tanpa return
    res.innerHTML = `> Mengeksekusi fungsi void cetakLabel("${input}")...<br>` +
                    `> Hasil Cetak di Layar : <strong style="color:var(--putih-murni)">--- LABEL BARANG: ${input} ---</strong>`;
}


/* === 8. LABORATORIUM: MODULARITAS FUNGSI (RETURN) === */
let idProses = 0; 
function makeJuice() {
    idProses++; 
    
    const bahan = document.getElementById('buah-input').value;
    const list = document.getElementById('juice-list');
    
    const li = document.createElement('li');
    li.className = 'juice-item';
    
    // Fungsi mengolah data parameter dan mengembalikan nilai baru
    li.innerHTML = `Log Eksekusi [ID:${idProses}] : Fungsi mengolah bahan "${bahan}". Return: "Produk dari ${bahan}"`;
    
    list.prepend(li); 
    
    if(list.children.length > 4) list.removeChild(list.lastChild);
}