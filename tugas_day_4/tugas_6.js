function filterNilai(namaArr, nilaiArr, batas = 80) {
    do {
        if (namaArr.length !== nilaiArr.length || namaArr.length === 0) {
            return "Data tidak valid (panjang nama & nilai harus sama dan tidak boleh kosong)";
        }
    } while (false);

    let hasil = [];
    for (let i = 0; i < namaArr.length; i++) {
        let nama = namaArr[i];
        let nilai = nilaiArr[i];

        if (nilai >= batas) {
            hasil.push(`${nama} mendapatkan nilai diatas 80`);
        } else {
            hasil.push(`${nama}: ${nilai}`);
        }
    }
 return hasil
}
console.log(filterNilai(["Wahyu","Dina","Umar"], [92, 65, 88]));