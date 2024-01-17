//Daftar Kehadiran Guru
const absensi = prompt("Tuliskan Mapel Anda ( Bahasa Indonesia, Bahasa Inggris, Matematika, Programmer )", "");

let bindo = {
  nik: "001",
  nama: "Sentodh",
  alamat: "Pamulang 1",
};
let mtk = {
  nik: "002",
  nama: "Ijam Kedaoenk",
  alamat: "Pamulang 2",
};
let programmer = {
  nik: "003",
  nama: "Pano BE ES DE",
  alamat: "Pamulang 3",
};
let bing = {
  nik: "004",
  nama: "Yanto Kopling",
  alamat: "Pamulang 4",
};

switch (absensi) {
  case "Bahasa Indonesia":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        bindo.nama +
        "\n Nik     : " +
        bindo.nik +
        "\n Alamat : " +
        bindo.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;
  case "Bahasa Inggris":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        bing.nama +
        "\n Nik     : " +
        bing.nik +
        "\n Alamat : " +
        bing.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;
  case "Matematika":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        mtk.nama +
        "\n Nik     : " +
        mtk.nik +
        "\n Alamat : " +
        mtk.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;
  case "Programmer":
    alert(
      "\n ===Selamat Datang=== " +
        "\n" +
        "\n Nama   : " +
        programmer.nama +
        "\n Nik     : " +
        programmer.nik +
        "\n Alamat : " +
        programmer.alamat +
        "\n" +
        "\n ===SELAMAT BERTUGAS==="
    );
    break;

  default:
    break;
}
