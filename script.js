/* ============================================================
   script.js — Logika Komputasi dan Animasi Interaktif 
   Website "Sinau Pemrograman Dasar"
   ============================================================ */


/* === 1. LOGIKA MENU NAVIGASI HP (HAMBURGER MENU) === */
// Mengambil tombol garis 3 (hamburger) dan daftar menu (nav-links) dari HTML
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Fungsi ini akan aktif saat tombol hamburger diklik di layar sentuh
hamburger.addEventListener('click', () => {
    // '.toggle' bekerja seperti saklar lampu.
    // Jika kelas 'active' belum ada, tambahkan. Jika sudah ada, hapus.
    // Di CSS, class 'active' ini bertugas menjatuhkan/memunculkan dropdown menu.
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fungsi ini digunakan saat pengguna sudah memilih salah satu menu (Misal: klik "Variabel")
function closeMenu() {
    // Kita memaksa membuang class 'active' agar menu menggulung/menutup kembali secara otomatis
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}


/* === 2. LOGIKA ANIMASI TUMPUKAN LOGO (HERO SECTION) === */
// Z-Index menentukan elemen mana yang berada di posisi paling depan menimpa yang lain.
let maxZIndex = 10; 

// Mencari semua logo di layar (yang memiliki nama class '.lang-card')
document.querySelectorAll('.lang-card').forEach(card => {
    
    // Memberikan perintah: Apa yang harus dilakukan jika logo ini diklik?
    card.addEventListener('click', () => {
        
        // 1. Naikkan nilai Z-Index agar logo ini berada di atas logo yang lain
        maxZIndex++;
        card.style.zIndex = maxZIndex;
        
        // 2. Hentikan sementara animasi mengambang/naik-turun dari CSS
        card.style.animationPlayState = 'paused';
        
        // 3. Efek Visual: Perbesar sedikit (scale) dan berikan bayangan tebal seolah ia maju/timbul
        card.style.transform = `scale(1.15)`;
        card.style.boxShadow = "0 25px 50px rgba(0,0,0,0.3)"; 
        
        // 4. Atur timer mundur. Setelah 350 milidetik (0.35 detik), kembalikan wujud aslinya
        setTimeout(() => {
            card.style.transform = `scale(1) rotate(0deg)`; // Reset ukuran ke normal
            card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)"; // Kembalikan bayangan tipis
            card.style.animationPlayState = 'running'; // Mulai kembali animasi mengambang
        }, 350);
    });
});


/* === 3. LOGIKA LAB 1: DETEKTOR TIPE DATA === */
// Mengambil elemen kolom ketikan dan kotak hasil
const typeInput = document.getElementById('type-input');
const typeResult = document.getElementById('type-result');

// 'input' event artinya kode ini akan tereksekusi SECARA LANGSUNG setiap kali pengguna menekan tombol di keyboard
typeInput.addEventListener('input', function() {
    
    // .trim() berfungsi membuang kelebihan spasi di awal dan akhir teks
    const val = this.value.trim();
    
    // Jika input dihapus/kosong, reset teksnya
    if (val === '') { 
        typeResult.innerHTML = 'Sistem standby. Menunggu masukan data ke memori...'; 
        return; 
    }

    let tipe; // Wadah untuk menampung tebakan mesin
    
    // Logika Percabangan Pendeteksi:
    // 1. Cek apakah itu nilai boolean mutlak ("true" atau "false")
    if (val.toLowerCase() === 'true' || val.toLowerCase() === 'false') {
        tipe = 'bool (Logika Biner 1 / 0)'; 
    } 
    // 2. Cek apakah itu murni angka (isNaN = is Not a Number). Jika bukan bukan angka (berarti angka), masuk kesini
    else if (!isNaN(val) && val !== '') {
        // Cek lagi, apakah di dalam angka itu ada titik (pecahan)?
        tipe = val.includes('.') ? 'float (Angka Pecahan)' : 'int (Angka Bulat)';
    } 
    // 3. Jika bukan true/false, dan bukan angka, maka itu pasti teks biasa.
    else {
        tipe = 'string (Untaian Teks)'; 
    }

    // Ubah tulisan yang ada di dalam kotak hasil
    typeResult.innerHTML = 
        `Data Masuk: "${val}"<br><br>` +
        `> Deklarasi Tipe Data C++ : <strong style="color:var(--putih-murni)">${tipe}</strong>`;
});


/* === 4. LOGIKA LAB 2: MESIN KALKULATOR (OPERATOR) === */
// Fungsi ini dipanggil hanya ketika tombol "Eksekusi CPU" ditekan
function calculate() {
    // Ambil angka dari input, ubah menjadi tipe data Number (Float)
    const num1 = parseFloat(document.getElementById('calc-num1').value);
    const num2 = parseFloat(document.getElementById('calc-num2').value);
    const op = document.getElementById('calc-op').value; // Mengambil tanda tambah, kurang, dll
    const res = document.getElementById('calc-result'); // Wadah layar hitam

    // Keamanan: Jika ada form yang tidak diisi, gagalkan proses
    if (isNaN(num1) || isNaN(num2)) { 
        res.innerHTML = "[ERROR SYSTEM]: Input bukan angka valid."; 
        return; 
    }

    let hasil;
    
    // ==== BAGIAN 1: PROSES ARITMATIKA (Hitung Matematika) ====
    if (op === '+') hasil = num1 + num2;
    else if (op === '-') hasil = num1 - num2;
    else if (op === '*') hasil = num1 * num2;
    else if (op === '/') hasil = num2 !== 0 ? (num1 / num2).toFixed(2) : "[FAIL]: Mustahil membagi dengan Nol!";
    else if (op === '%') hasil = num2 !== 0 ? num1 % num2 : "[FAIL]: Modulo nol tidak terdefinisi!";

    // ==== BAGIAN 2: PROSES PERBANDINGAN (Tanya Jawab Logika) ====
    // Gunakan Operator Ternary (Percabangan Singkat Sebaris)
    // Jika num1 lebih besar, hasilkan "Benar", jika salah hasilkan "Salah"
    let lebihBesar = (num1 > num2) ? "Benar (true / 1)" : "Salah (false / 0)";
    
    // Pengecekan === (Sama Persis)
    let samaDengan = (num1 === num2) ? "Benar (true / 1)" : "Salah (false / 0)";

    // ==== BAGIAN 3: MENCETAK KE LAYAR ====
    res.innerHTML = `<strong>1. EKSEKUSI ARITMATIKA</strong><br>` +
                    `> Instruksi ALU: [ ${num1} ] ${op} [ ${num2} ]<br>` +
                    `> Hasil Kalkulasi : <strong style="color:var(--putih-murni); font-size:1.2rem;">${hasil}</strong><br><br>` +
                    `<strong>2. EVALUASI PERBANDINGAN</strong><br>` +
                    `> Apakah ${num1} > ${num2}? <strong>${lebihBesar}</strong><br>` +
                    `> Apakah ${num1} == ${num2}? <strong>${samaDengan}</strong>`;
}


/* === 5. LOGIKA LAB 3: PENGKONDISIAN/PERCABANGAN === */
// Fungsi simulasi sensor cerdas If-Else
function checkSuhu() {
    const input = document.getElementById('suhu-input').value;
    const res = document.getElementById('suhu-result');
    
    // Tolak jika input kosong
    if(input === '') { res.innerHTML = "[WARN]: Masukkan nilai angka sensor."; return; }

    const suhu = Number(input); // Jadikan tipe datanya sebagai angka
    let wujud = ''; // Variabel kosong untuk menampung bentuk air

    // Arsitektur If-Else
    // Prosesor akan mengecek blok ini dari atas. Begitu menemukan yang benar, ia langsung berhenti mengecek yang bawah.
    if (suhu <= 0) {
        wujud = 'Padat (Kristal Es)'; // Jika suhu di bawah/sama dengan nol
    } else if (suhu >= 100) {
        wujud = 'Gas (Uap Air)'; // Jika suhu di atas/sama dengan seratus
    } else {
        wujud = 'Cair (Liquid)'; // Jika selain semua kondisi di atas (berarti angka 1 sampai 99)
    }

    res.innerHTML = `> Mengeksekusi blok IF-ELSE dengan parameter suhu = ${suhu} <br>` +
                    `> Kondisi Terpenuhi. Status Materi Fisik : <strong style="color:var(--putih-murni)">${wujud}</strong>`;
}


/* === 6. LOGIKA LAB 4: PERULANGAN (LOOPING) === */
function runLoop() {
    let count = document.getElementById('loop-input').value;
    const container = document.getElementById('loop-result');
    
    // Sistem Pengaman Memori
    // Membatasi loop maksimal di angka 25 agar memori browser pengguna tidak berat/lagging
    if(count > 25) count = 25; 
    if(count < 1) count = 1;

    container.innerHTML = ''; // Membersihkan kontainer dari hasil loop sebelumnya
    
    // PERULANGAN (For Loop)
    // 1. Mulai dari i = 1
    // 2. Jika i lebih kecil/sama dengan 'count', ulangi!
    // 3. Tambahkan nilai i sebanyak 1 (i++) setiap kali satu siklus selesai
    for (let i = 1; i <= count; i++) {
        
        // Kita menggunakan SetTimeout semata-mata untuk memberi efek jeda animasi
        // sehingga mata kita bisa melihat mesin Javascript mencetak kotak tersebut satu per satu
        setTimeout(() => {
            // Membuat elemen kotak HTML secara ajaib lewat Javascript
            const box = document.createElement('div');
            box.className = 'loop-box';
            box.innerText = i; // Menaruh angka i ke dalam kotak
            
            // Meletakkan kotak ke dalam layar web
            container.appendChild(box);
        }, i * 150); // Jeda waktu dikalikan dengan putarannya (150ms, 300ms, 450ms, dst)
    }
}


/* === 7. LOGIKA LAB 5: MODULARITAS FUNGSI === */
let idProses = 0; // Variabel diluar fungsi untuk menyimpan riwayat putaran pabrik
function makeJuice() {
    
    idProses++; // Setiap tombol ditekan, id akan bertambah 1
    
    // Menarik bahan parameter dari pilihan menu Dropdown
    const bahan = document.getElementById('buah-input').value;
    const list = document.getElementById('juice-list');
    
    // Membuat elemen daftar peluru HTML (<li>)
    const li = document.createElement('li');
    li.className = 'juice-item';
    
    // Mencetak output hasil olahan fungsi
    li.innerHTML = `Log Eksekusi [ID:${idProses}] : Fungsi menerima parameter "${bahan}". Nilai (Return) berhasil dikembalikan!`;
    
    // prepend() akan meletakkan tulisan paling baru di posisi paling atas (menimpa teks lama)
    list.prepend(li); 
    
    // Menghapus elemen paling bawah jika sudah terdapat lebih dari 4 tulisan 
    // Tujuannya agar tampilan web tidak kepanjangan
    if(list.children.length > 4) list.removeChild(list.lastChild);
}