// fungsi tanpa return
function tampilkan(){
    console.log('hello!');
}
tampilkan();

// function dengan return
function munculAngkaDua(){
    return 2;
}
var tampung = munculAngkaDua();
console.log(tampung);

// function dengan parameter
function tambahDua(angka){
    return angka + 2;
}
var tampung = tambahDua(2);
var tampung2 = tambahDua(5);
var tampung3 = tambahDua(8);
console.log({
    tampung,
    tampung2,
    tampung3
})

// Pengiriman parameter lebih dari satu
function tampilkanAngka(angkaPertama, angkaKedua){
    return angkaPertama + angkaKedua;
}
console.log(tampilkanAngka(5,3));

// Inisialisasi parameter dengan nilai default
function inisialisasiAngka(angka=1){
    return angka;
}
console.log(inisialisasiAngka(4));
console.log(inisialisasiAngka());

function test(nama1, nama2 = 'testing'){
    console.log({
        nama1,
        nama2
    })
    return nama1 + nama2;
}
console.log(test('Yoga'));
console.log(test('Yo'));