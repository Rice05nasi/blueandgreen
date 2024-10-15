// var nama = 'WakWuk';
// nama = 'awa';

// console.log(nama);
// alert(nama);


// var namaInput = prompt("masukan nama anda");
// // alert(`Selamat datang ${namaInput} di Website kami`);
// var alamat = 'bandung';
// alert(`Selamat datang ${namaInput},`)


// var namaInput = prompt ('masukkan nama anda');
// var jurusan = prompt ('masukkan jurusan anda');
// var alamatInput = prompt ('masukkan alamat anda');
// alert (`Selamat datang ${namaInput}, jurusan kamu adalah ${jurusan}, alamat kamu di${alamatInput} ya`);


// for (var i = 0; i < 1000; i++){
//     document.write(`Aul rizz banget! <br>`);
// }

// var ngulang = true;
// while(ngulang){
//     console.log(`hello`);
//     ngulang = confirm(`lagi, plus aura`);
// }

// var i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// // menghitung luas persegi (spongebob)
// let sisi = prompt(`masukan ukuran sisi persegi`),
//     luasp = sisi*sisi;

//     console.log(`luas persegi adalah ${luasp}`);

// // menghitung luas persegi panjang (bus)
// let panjang = prompt(`masukan ukuran panjang persegi panjang`),
// lebar = prompt(`masukan ukuran lebar persegi panjang`)
//     luaspp = panjang*lebar;

// console.log(`luas persegi panjang adalah ${luaspp}`);

// // menghitung luas segitiga (tumpeng)
// let alas = prompt(`masukan ukuran alas segitiga`),
// tinggi = prompt(`masukan ukuran tinggi segitiga`)
//      luass = 1/2*alas*tinggi;

// console.log(`luas segitiga adalah ${luass}`);

// // menghitung luas lingkaran (rasengan)
// let r = prompt(`masukan ukuran jarijari lingkaran`)
// phi = 3,14
// luasl = phi*r*r

// console.log(`luas lingkaran adalah ${luasl}`);


// for (let i = 0; i < 3; i++){
//     console.log(i)
// }


// let text=``;
//     for (let i = 1; i <= 3; i++){
//         text = `${i*2}  `;
//         console.log(text);
    
// }


// for (let i = 0; i < 3; i++) { // Diberikan 3 kali percobaan
//     let password = prompt("Masukan Password");
    
//     if (password == "uhuuy") {
//         alert("Selamat datang di kelas informatika");
//         window.location.href = "dashboard.html";
//         break; // Keluar dari loop jika password benar
//     } else {
//         alert("password salah, coba lagi!");
//     }
// }
// document.write(`<h1>Gagal masuk, silahkan muat ulang halaman!<h1/>`)


for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Lewatkan iterasi saat i sama dengan 3
    }
    if (i === 7) {
        break; // Keluar dari loop saat i sama dengan 7
    }
    console.log(i);
}
// Output: 0, 1, 2, 4, 5, 6