// SOAL DAY 4

// nomor 1
function hitungAbsensi(absensiArr) {
    do {                                               // lakukan dulu 1 hal
        if (absensiArr.length === 0) {
            return "Data absensi tidak boleh kosong";   // langsung mereturn jika absensi kosong
        }  
    } while (false);                                  // ketika false maka jangan diulang

    let hadir = 0, izin = 0, alpha = 0;               

    for (let i = 0; i < absensiArr.length; i++) {      // selama i lebih kecil dari panjang absensi

        let status = absensiArr[i]; 

        if (status === "hadir") {                    // status hadir, izin dan alpa akan terhitung dengan pengulangan
            hadir++;
        } else if (status === "izin") {
            izin++;
        } else if (status === "alpha") {
            alpha++;
        
        }
    }

    let persenHadir = ((hadir / absensiArr.length) * 100).toFixed(0);  // menggunakan persen, berapa persen kehadiran dan digenapkan angkanya dengan tofixed 0, yaitu jangan menambahhkan angka koma

    let rekap = [];

    const dataAbsensi = [["hadir", hadir], ["izin", izin], ["alpha", alpha]]; 
    console.log(dataAbsensi);


    dataAbsensi.forEach(([jenis, jumlah]) => {      // for each berguna untuk  
        switch (jenis) {                                            // switch berguna untuk
            case "hadir":
                rekap.push(`${jenis}: ${jumlah} kali`);
                break;
            case "izin":
                rekap.push(`${jenis}: ${jumlah} kali`);
                break;
            case "alpha":
                rekap.push(`${jenis}: ${jumlah} kali`);
                break;
        }
    });
    return `${rekap.join(",")} + . %Hadir: ${persenHadir}%.`;    // menampilkan hasil dengan return
}
console.log(hitungAbsensi(["hadir", "alpha", "izin", "hadir", "hadir"]));

//nomor 2
function laporanKelulusan(namaArr, nilaiArr) {
    do {
        if (namaArr.length !== nilaiArr.length || namaArr.length === 0) {
            return "Data tidak valid (panjang nama & nilai harus sama dan tidak boleh kosong)";
        }
    } while (false);

    let hasil = [];

    for (let i = 0; i < namaArr.length; i++) {
        let nama = namaArr[i];                                 // Mengambil nama dari array namaArr pada indeks saat ini
        let nilai = nilaiArr[i];                               // Mengambil nilai dari array nilaiArr pada indeks saat ini
        let status = "";                                       // Mendeklarasikan variabel status

        if (nilai >= 70) {                                     // Memeriksa apakah nilai lebih besar atau sama dengan 70
            status = "Lulus";                                  // Jika ya, status diatur menjadi "Lulus"
        } else {                                               // Jika tidak
            status = "Tidak Lulus";                            // Status diatur menjadi "Tidak Lulus"
        }
        switch (status) {                                      // Memulai pernyataan switch berdasarkan nilai status
            case "Lulus":                                      // Jika status adalah "Lulus"
            hasil.push(`${nama}: ${status} (nilai ${nilai})`); // Menambahkan string ke array hasil menggunakan template literal
            break;                                             // Menghentikan eksekusi switch
        case "Tidak Lulus":                                    // Jika status adalah "Tidak Lulus"
            hasil.push(`${nama}: ${status} (nilai ${nilai})`); // Menambahkan string ke array hasil menggunakan template literal
            break; // Menghentikan eksekusi switch
    }
    }
    return hasil.join(", ");
}
console.log(laporanKelulusan(["Ali", "Budi", "Cici"], [78, 55, 95]));

// nomor 3
function analisaHafalan(hafalanArr) {
    do {
        if (hafalanArr.length === 0) {
            return "Data hafalan tidak boleh kosong";
        }
    } while (false);

    let hasil = [];

    let jumlahHafalan = 0;
    for (let i = 0; i < hafalanArr.length; i++) {
        let hafalan = hafalanArr[i];
        jumlahHafalan += hafalan;
        let status = "";

        if (hafalan >= 90 && hafalan <= 100) {
                status = "Sangat Baik";
        } else if (hafalan >= 80 && hafalan < 90) {
                status = "Baik";
        } else if (hafalan >= 70 && hafalan < 80) {
                status = "Cukup";
        } else {
            status = "nilai jelek";
        }

        switch (status) {
            case "Sangat baik":
                hasil.push(`minggu ke- ${i + 1}: ${status}`);
                break;
            case "Baik":
                hasil.push(`minggu ke- ${i + 1}: ${status}`);
                break;
            case "Cukup":
                hasil.push(`minggu ke- ${i + 1}: ${status}`);
                break;
            case "nilai jelek":
                hasil.push(`minggu ke- ${i + 1}: ${status}`);
                break;
        }
    }
    return hasil.join(", ");
}
console.log(analisaHafalan([89, 77, 90, 58, 89]));

//nomor 4
function rekapUsia(usiaArr) {
    do {
        if (usiaArr.length === 0) {
            return "Tulis dong data usianya, jangan kosong";
        } while (false);
    }

    let hasil = [];

    for (let i = 0; i < usiaArr.lenght; i++) {
        let usia = usiaArr[i];
        let status = "";

        if (usia >= 22) {
            status = "dewasa";
        } else if (usia >= 11 && usia < 22) {
            status = "remaja";
        } else {
            status = "anak-anak";
        }

        switch (status) {
            case "dewasa":
                hasil.push(`santri ${i + 1}: ${status}`);
                break;
            case "remaja":
                hasil.push(`santri ${i + 1}: ${status}`);
                break;
            case "anak-anak":
                hasil.push(`santri ${i + 1}: ${status}`);
                break;
        }
    }
}
console.log(rekapUsia([10, 30, 17, 20]));

//nomor 5
function daftarSalam(namaArr) {
    do {
        if
    }
}