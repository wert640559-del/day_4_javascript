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