let pegawai = {
  nip: "234",
  nama: "Baso Lewa",
  alamat: {
    jalan: "jl. Iwir",
    kelurahan: "kedaoenk",
    kecamatan: "Pampoelang",
    kota: "Tangerang Selatan",
  },
};

function TotalGaji(jamkerja, gajiperjam) {
  let GajiPokok = jamkerja * gajiperjam;
  console.log("Gaji anda: " + GajiPokok);
}

// pegawai.nama = "Senthod Prawiradigdo";
console.log("Nama: " + pegawai.nama);
console.log("Nip: " + pegawai.nip);
console.log("Alamat{ ");
console.log("Jalan: " + pegawai.alamat.jalan);
console.log("Kelurahan: " + pegawai.alamat.kelurahan);
console.log("Kecamatan: " + pegawai.alamat.kecamatan);
console.log("}");
TotalGaji(7, 2000000);
