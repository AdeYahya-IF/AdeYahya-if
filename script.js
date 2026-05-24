// ============================================
// script.js - Logika Contoh Interaktif
// Pemrograman Dasar
// ============================================


// ============================================
// DEMO 1: VARIABEL
// Menunjukkan cara menyimpan dan menggunakan variabel
// ============================================

function demoVariable() {
    // Ambil nilai dari input nama dan usia
    let nama = document.getElementById("var-nama").value;
    let usia = document.getElementById("var-usia").value;

    // Cek apakah kedua input sudah diisi
    if (nama === "" || usia === "") {
        tampilkanOutput("output-variable", "⚠️ Isi nama dan usia dulu ya!", false);
        return; // Hentikan fungsi jika ada input kosong
    }

    // Buat variabel salam dengan menggabungkan teks dan variabel nama
    let salam = "Halo, " + nama + "!";

    // Buat variabel tahun lahir berdasarkan tahun sekarang dikurangi usia
    let tahunSekarang = new Date().getFullYear(); // ambil tahun saat ini
    let tahunLahir = tahunSekarang - Number(usia); // konversi usia ke angka dulu

    // Susun teks hasil untuk ditampilkan
    let hasil =
        `📦 Isi Variabel:\n` +
        `   nama  = "${nama}"  → tipe: ${typeof nama}\n` +
        `   usia  = ${usia}    → tipe: ${typeof Number(usia)}\n\n` +
        `💬 Hasil:\n` +
        `   ${salam}\n` +
        `   Kamu lahir sekitar tahun ${tahunLahir}.`;

    // Tampilkan hasil ke kotak output
    tampilkanOutput("output-variable", hasil, true);
}


// ============================================
// DEMO 2: ARRAY
// Menunjukkan cara menyimpan banyak data dalam satu variabel
// ============================================

let daftarBelanja = []; // array global untuk menyimpan item belanja

function tambahItem() {
    // Ambil nilai dari input item
    let input = document.getElementById("array-item");
    let item = input.value.trim(); // .trim() menghapus spasi di awal/akhir

    // Cek apakah input tidak kosong
    if (item === "") {
        tampilkanOutput("output-array", "⚠️ Tulis nama item dulu!", false);
        return; // Hentikan jika kosong
    }

    // Tambahkan item ke dalam array dengan push()
    daftarBelanja.push(item);

    // Kosongkan input setelah item ditambahkan
    input.value = "";

    // Tampilkan isi array sekarang
    tampilkanArray();
}

function hapusItem() {
    // Cek apakah array tidak kosong sebelum menghapus
    if (daftarBelanja.length === 0) {
        tampilkanOutput("output-array", "⚠️ Tidak ada item untuk dihapus.", false);
        return; // Hentikan jika sudah kosong
    }

    // Hapus item terakhir dari array dengan pop()
    let itemDihapus = daftarBelanja.pop();

    // Tampilkan array yang sudah diperbarui
    tampilkanArray();
}

function tampilkanArray() {
    // Cek apakah array kosong
    if (daftarBelanja.length === 0) {
        tampilkanOutput("output-array", "Daftar belanja kosong...", false);
        return;
    }

    // Buat teks yang menampilkan setiap item beserta indeksnya
    let baris = `📋 daftarBelanja (${daftarBelanja.length} item):\n\n`;

    // Gunakan for loop untuk menampilkan setiap item
    for (let i = 0; i < daftarBelanja.length; i++) {
        baris += `   [${i}] ${daftarBelanja[i]}\n`; // indeks dimulai dari 0
    }

    // Tambahkan info panjang array di bawah
    baris += `\n📏 daftarBelanja.length = ${daftarBelanja.length}`;

    // Tampilkan ke output
    tampilkanOutput("output-array", baris, true);
}


// ============================================
// DEMO 3: FUNGSI
// Menunjukkan cara membuat dan memanggil fungsi dengan parameter
// ============================================

// Fungsi untuk menghitung luas persegi panjang
// Parameter: panjang dan lebar (input yang diterima fungsi)
// Return: nilai luas (output yang dikembalikan fungsi)
function hitungLuas(panjang, lebar) {
    let luas = panjang * lebar; // proses perkalian di dalam fungsi
    return luas;                // kembalikan hasil ke pemanggil fungsi
}

// Fungsi untuk menghitung keliling persegi panjang
function hitungKeliling(panjang, lebar) {
    let keliling = 2 * (panjang + lebar); // rumus keliling
    return keliling;
}

function demoFungsi() {
    // Ambil nilai input dan ubah ke tipe Number
    let panjang = Number(document.getElementById("fn-panjang").value);
    let lebar   = Number(document.getElementById("fn-lebar").value);

    // Validasi: pastikan input diisi dan berupa angka positif
    if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
        tampilkanOutput("output-fungsi", "⚠️ Masukkan angka positif untuk panjang dan lebar!", false);
        return;
    }

    // Panggil fungsi dengan argumen (nilai yang dioper ke parameter)
    let luas      = hitungLuas(panjang, lebar);
    let keliling  = hitungKeliling(panjang, lebar);

    // Susun teks hasil
    let hasil =
        `🔧 Fungsi dipanggil:\n` +
        `   hitungLuas(${panjang}, ${lebar})     → ${luas} cm²\n` +
        `   hitungKeliling(${panjang}, ${lebar}) → ${keliling} cm\n\n` +
        `📐 Persegi panjang ${panjang} × ${lebar}:\n` +
        `   Luas     = ${luas} cm²\n` +
        `   Keliling = ${keliling} cm`;

    // Tampilkan ke output
    tampilkanOutput("output-fungsi", hasil, true);
}


// ============================================
// DEMO 4: TIPE DATA
// Menunjukkan cara JavaScript menentukan tipe dari sebuah nilai
// ============================================

function demoTipeData() {
    // Ambil teks input dari user
    let inputTeks = document.getElementById("td-input").value;

    // Cek apakah input kosong
    if (inputTeks === "") {
        tampilkanOutput("output-tipedata", "⚠️ Ketik sesuatu dulu ya!", false);
        return;
    }

    // Coba konversi ke angka untuk mengecek apakah teks tersebut adalah angka
    let cobaAngka = Number(inputTeks);

    // Tentukan tipe data secara manual berdasarkan nilai inputnya
    let tipeDeteksi;  // variabel untuk menyimpan nama tipe yang kita deteksi
    let emoji;        // variabel untuk ikon yang sesuai tipe
    let nilaiAsli;    // variabel untuk nilai setelah konversi yang tepat

    if (inputTeks === "true" || inputTeks === "false") {
        // Jika inputnya persis "true" atau "false" → boolean
        tipeDeteksi = "Boolean";
        emoji = "✅";
        nilaiAsli = inputTeks === "true"; // konversi string ke boolean asli
    } else if (!isNaN(cobaAngka) && inputTeks !== "") {
        // Jika bisa dikonversi ke angka → number
        if (inputTeks.includes(".")) {
            // Jika ada titik desimal → float
            tipeDeteksi = "Number (Float / Desimal)";
        } else {
            // Jika tidak ada titik → integer
            tipeDeteksi = "Number (Integer / Angka Bulat)";
        }
        emoji = "🔢";
        nilaiAsli = cobaAngka;
    } else {
        // Selain itu → string (teks)
        tipeDeteksi = "String (Teks)";
        emoji = "📝";
        nilaiAsli = inputTeks;
    }

    // Gunakan typeof untuk mendapat nama tipe dari JavaScript
    let tipePrimitive = typeof nilaiAsli; // hasilnya: "string", "number", atau "boolean"

    // Susun teks hasil
    let hasil =
        `${emoji} Input: "${inputTeks}"\n\n` +
        `📌 Tipe Terdeteksi : ${tipeDeteksi}\n` +
        `🔍 typeof          : "${tipePrimitive}"\n\n` +
        `💡 Tipe data umum:\n` +
        `   "Teks"  → string\n` +
        `   42      → number (integer)\n` +
        `   3.14    → number (float)\n` +
        `   true    → boolean`;

    // Tampilkan ke output
    tampilkanOutput("output-tipedata", hasil, true);
}


// ============================================
// DEMO 5: PERCABANGAN
// Menunjukkan cara program mengambil keputusan dengan if-else
// ============================================

function demoPercabangan() {
    // Ambil nilai dari input dan ubah ke angka
    let nilai = Number(document.getElementById("pc-nilai").value);

    // Validasi: pastikan nilai antara 0 sampai 100
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        tampilkanOutput("output-percabangan", "⚠️ Masukkan angka antara 0 sampai 100!", false);
        return;
    }

    // Percabangan untuk menentukan grade berdasarkan nilai
    let grade;   // variabel untuk menyimpan hasil kondisi
    let emoji;   // variabel untuk ikon sesuai kondisi

    if (nilai >= 90) {
        // Kondisi pertama: nilai 90 ke atas
        grade = "A - Sangat Baik 🌟";
        emoji = "🎉";
    } else if (nilai >= 75) {
        // Kondisi kedua: nilai 75 sampai 89
        grade = "B - Baik 👍";
        emoji = "😊";
    } else if (nilai >= 60) {
        // Kondisi ketiga: nilai 60 sampai 74
        grade = "C - Cukup";
        emoji = "😐";
    } else if (nilai >= 40) {
        // Kondisi keempat: nilai 40 sampai 59
        grade = "D - Kurang";
        emoji = "😕";
    } else {
        // Kondisi terakhir (else): nilai di bawah 40
        grade = "E - Perlu Belajar Lebih Keras";
        emoji = "📚";
    }

    // Susun teks hasil
    let hasil =
        `${emoji} Nilai: ${nilai}\n\n` +
        `📋 Proses Percabangan:\n` +
        `   if (${nilai} >= 90)  → ${nilai >= 90 ? "✅ TERPENUHI" : "❌ tidak"}\n` +
        `   if (${nilai} >= 75)  → ${nilai >= 75 && nilai < 90 ? "✅ TERPENUHI" : "❌ tidak"}\n` +
        `   if (${nilai} >= 60)  → ${nilai >= 60 && nilai < 75 ? "✅ TERPENUHI" : "❌ tidak"}\n` +
        `   if (${nilai} >= 40)  → ${nilai >= 40 && nilai < 60 ? "✅ TERPENUHI" : "❌ tidak"}\n` +
        `   else              → ${nilai < 40 ? "✅ TERPENUHI" : "❌ tidak"}\n\n` +
        `🏆 Grade: ${grade}`;

    // Tampilkan ke output
    tampilkanOutput("output-percabangan", hasil, true);
}


// ============================================
// DEMO 6: PERULANGAN
// Menunjukkan cara for loop mengeksekusi kode berulang kali
// ============================================

function demoPerulangan() {
    // Ambil jumlah bintang dari input dan ubah ke angka
    let jumlah = Number(document.getElementById("loop-n").value);

    // Validasi: pastikan angka antara 1 sampai 20
    if (isNaN(jumlah) || jumlah < 1 || jumlah > 20) {
        tampilkanOutput("output-perulangan", "⚠️ Masukkan angka antara 1 sampai 20!", false);
        return;
    }

    // Variabel untuk menampung semua bintang
    let baris = "";

    // For loop: jalankan blok kode sebanyak 'jumlah' kali
    // i dimulai dari 1, loop berjalan selama i <= jumlah, i bertambah 1 setiap putaran
    for (let i = 1; i <= jumlah; i++) {
        baris += "⭐"; // tambahkan satu bintang setiap putaran
    }

    // Susun teks penjelasan proses loop
    let hasil =
        `🔄 for (let i = 1; i <= ${jumlah}; i++)\n\n` +
        `📊 Proses:\n`;

    // Tampilkan log setiap iterasi (maksimal 5 baris agar tidak terlalu panjang)
    let batasLog = Math.min(jumlah, 5); // tampilkan maksimal 5 iterasi
    for (let i = 1; i <= batasLog; i++) {
        hasil += `   Putaran ke-${i}: tambah ⭐\n`; // log setiap putaran
    }

    // Jika iterasi lebih dari 5, tambahkan keterangan
    if (jumlah > 5) {
        hasil += `   ... (${jumlah - 5} putaran lainnya)\n`;
    }

    // Tambahkan hasil akhir bintang
    hasil += `\n⭐ Hasil (${jumlah} bintang):\n   ${baris}`;

    // Tampilkan ke output
    tampilkanOutput("output-perulangan", hasil, true);
}


// ============================================
// FUNGSI PEMBANTU (Helper)
// Fungsi yang digunakan oleh semua demo di atas
// ============================================

// Fungsi untuk menampilkan teks ke kotak output
// Parameter:
//   id      → id elemen output yang dituju
//   pesan   → teks yang akan ditampilkan
//   berhasil → true = teks terang (aktif), false = teks redup (peringatan)
function tampilkanOutput(id, pesan, berhasil) {
    // Ambil elemen output berdasarkan id
    let elOutput = document.getElementById(id);

    // Isi teks outputnya
    elOutput.textContent = pesan;

    // Tambah atau hapus kelas 'aktif' untuk mengubah warna teks
    if (berhasil) {
        elOutput.classList.add("aktif");    // teks jadi terang
    } else {
        elOutput.classList.remove("aktif"); // teks tetap redup
    }
}
