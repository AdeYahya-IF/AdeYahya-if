// Data Algoritma
const algoritmaData = [
    { title: "Bubble Sort", desc: "Mengurutkan dengan menukar elemen bersebelahan. O(n²).", code: "for(let i=0; i<n-1; i++)\n  for(let j=0; j<n-i-1; j++)\n    if(arr[j]>arr[j+1]) [arr[j],arr[j+1]]=[arr[j+1],arr[j]];" },
    { title: "Binary Search", desc: "Pencarian cepat di array terurut. O(log n).", code: "function binarySearch(arr, x) {\n  let l=0, r=arr.length-1;\n  while(l<=r) {\n    let mid=Math.floor((l+r)/2);\n    if(arr[mid]===x) return mid;\n    else if(arr[mid]<x) l=mid+1;\n    else r=mid-1;\n  }\n  return -1;\n}" },
    { title: "Rekursi (Faktorial)", desc: "Fungsi memanggil diri sendiri.", code: "function faktorial(n) {\n  if(n<=1) return 1;\n  return n * faktorial(n-1);\n}" }
];

const strukturDataData = [
    { title: "Stack", desc: "LIFO: push, pop. Contoh: undo/redo.", code: "class Stack {\n  constructor() { this.items=[]; }\n  push(item){ this.items.push(item); }\n  pop(){ return this.items.pop(); }\n}" },
    { title: "Queue", desc: "FIFO: enqueue, dequeue.", code: "class Queue {\n  constructor(){ this.items=[]; }\n  enqueue(item){ this.items.push(item); }\n  dequeue(){ return this.items.shift(); }\n}" },
    { title: "Linked List", desc: "Node saling terhubung.", code: "class Node { constructor(data){ this.data=data; this.next=null; } }" },
    { title: "Binary Tree", desc: "Struktur hierarkis dengan root.", code: "class TreeNode {\n  constructor(val){ this.val=val; this.left=null; this.right=null; }\n}" }
];

// RINGKASAN MATERI YANG LEBIH PANJANG & MENDALAM
const summaryHTML = `
    <h3><i class="fas fa-chart-line"></i> Kompleksitas Waktu (Big-O)</h3>
    <p>Notasi Big-O digunakan untuk mengukur efisiensi algoritma berdasarkan waktu running dan memori yang dibutuhkan seiring bertambahnya ukuran input (n). Berikut perbandingan beberapa struktur data dan algoritma umum:</p> </br>
    <table class="summary-table">
        <tr><th>Struktur/Algoritma</th><th>Rata-rata</th><th>Terburuk</th></tr>
        <tr><td>Bubble Sort</td><td>O(n²)</td><td>O(n²)</td></tr>
        <tr><td>Binary Search (pada array terurut)</td><td>O(log n)</td><td>O(log n)</td></tr>
        <tr><td>Stack / Queue (operasi push/pop/enqueue/dequeue)</td><td>O(1)</td><td>O(1)</td></tr>
        <tr><td>Linked List (pencarian)</td><td>O(n)</td><td>O(n)</td></tr>
        <tr><td>Binary Search Tree (seimbang)</td><td>O(log n)</td><td>O(n)</td></tr>
    </table>
    <p><strong>Penjelasan tambahan:</strong> Algoritma dengan O(1) adalah yang tercepat (konstan), O(log n) sangat baik (pembagian data), O(n) linear, dan O(n²) kuadratik (lambat untuk data besar).</p>

    <h3><i class="fas fa-database"></i> Poin Penting Struktur Data</h3>
    <ul class="summary-list">
        <li><i class="fas fa-check-circle"></i> <strong>Array:</strong> Akses elemen O(1) via indeks, namun insert/delete di tengah membutuhkan O(n) karena pergeseran elemen. Cocok untuk data statis dan akses acak.</li>
        <li><i class="fas fa-check-circle"></i> <strong>Stack & Queue:</strong> Stack (LIFO) digunakan pada mekanisme undo, pemanggilan fungsi (call stack), dan evaluasi ekspresi. Queue (FIFO) dipakai pada antrian proses, BFS (Breadth-First Search), dan manajemen tugas.</li>
        <li><i class="fas fa-check-circle"></i> <strong>Linked List:</strong> Memori dinamis dan tidak kontigu. Insert/delete di awal atau akhir O(1) (jika diketahui pointer). Pencarian tetap O(n). Cocok untuk aplikasi yang sering menambah/menghapus data.</li>
        <li><i class="fas fa-check-circle"></i> <strong>Hash Table:</strong> Pencarian, insert, delete rata-rata O(1) dengan fungsi hash yang baik. Kekurangan: tidak mempertahankan urutan dan bisa terjadi collision (tabrakan hash) yang ditangani dengan chaining atau open addressing.</li>
        <li><i class="fas fa-check-circle"></i> <strong>Binary Search Tree (BST):</strong> Menyimpan data terurut. Pencarian, insert, delete rata-rata O(log n) jika pohon seimbang. Namun dapat menjadi O(n) jika tidak seimbang (menyerupai linked list). Solusi: menggunakan pohon seimbang seperti AVL atau Red-Black Tree.</li>
    </ul>

    <h3><i class="fas fa-microchip"></i> Algoritma Sorting yang Perlu Diketahui</h3>
    <p>Selain Bubble Sort, ada algoritma sorting yang lebih efisien untuk data besar: <strong>Quick Sort</strong> (rata-rata O(n log n)), <strong>Merge Sort</strong> (O(n log n) stabil), dan <strong>Insertion Sort</strong> (baik untuk data hampir terurut). Memilih algoritma sorting yang tepat bergantung pada ukuran data, karakteristik data, dan kebutuhan stabilitas.</p>

    <h3><i class="fas fa-code"></i> Contoh Implementasi Singkat</h3>
    <div class="code-snippet" style="margin-bottom:1rem;">
        <pre>// Quick Sort (partisi)
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.slice(1).filter(x => x <= pivot);
  let right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}</pre>
    </div>

    <h3><i class="fas fa-lightbulb"></i> Tips Belajar Efektif</h3>
    <p>• Visualisasikan algoritma dengan diagram atau situs seperti <strong>VisuAlgo.net</strong>.<br>
    • Latih soal secara rutin di platform seperti <strong>LeetCode, HackerRank, atau CodeSignal</strong>.<br>
    • Pahami trade-off antara <strong>waktu (time complexity)</strong> dan <strong>memori (space complexity)</strong>. Tidak selalu algoritma tercepat yang terbaik jika memori terbatas.<br>
    • Implementasikan ulang struktur data dari nol (tanpa library bawaan) untuk memperdalam pemahaman.</p>
`;

// Fungsi render, stat, navbar, dll (tidak berubah dari sebelumnya)
function renderCards(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(item => `
        <div class="card">
            <div class="card-icon"><i class="fas fa-code-branch"></i></div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="code-snippet"><pre>${escapeHtml(item.code)}</pre></div>
        </div>
    `).join('');
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, m => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;' }[m] || m));
}

function updateStats() {
    document.getElementById('totalTopics').innerText = algoritmaData.length + strukturDataData.length;
    document.getElementById('totalExamples').innerText = algoritmaData.length + strukturDataData.length;
}

function initNavbar() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    if (toggle) toggle.onclick = () => menu.classList.toggle('active');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            if (pageYOffset >= section.offsetTop - 100) current = section.id;
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}

function loadSummary() {
    document.getElementById('summaryContent').innerHTML = summaryHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards('algoritmaGrid', algoritmaData);
    renderCards('strukturDataGrid', strukturDataData);
    updateStats();
    loadSummary();
    initNavbar();
});