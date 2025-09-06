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
