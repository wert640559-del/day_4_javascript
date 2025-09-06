function angkaSeringMuncul(angkaArr) {
    do {
        if (angkaArr.length === 0) {
            return "Data angka tidak boleh kosong";
        }
    } while (false);

    let frekuensi = {};
    let maxFrekuensi = 0;
    let angkaTerbanyak = null;

    for (let i = 0; i < angkaArr.length; i++) {
        const angka = angkaArr[i];

        if (frekuensi[angka]) {
            frekuensi[angka]++;
        } else {
            frekuensi[angka] = 1;
        }
    }
    for (const angka in frekuensi) {
        if (frekuensi[angka] > maxFrekuensi) {
            maxFrekuensi = frekuensi[angka];
            angkaTerbanyak = angka;
        }
    }
    return `Angka ${angkaTerbanyak} muncul paling sering, sebanyak ${maxFrekuensi} kali`;
}
console.log(angkaSeringMuncul([1, 2, 2, 3, 1, 2]));