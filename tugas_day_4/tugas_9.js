function nilaiTertinggi(namaArr, nilaiArr) {
    
    while (namaArr.length !== nilaiArr.length) {
        return "Data tidak valid";
    }

    let nilaiTertinggi = 0;
    let namaTertinggi = "";

    for (let i = 0; i < nilaiArr.length; i++) {
        if (nilaiArr[i] > nilaiTertinggi) {
            nilaiTertinggi = nilaiArr[i];
            namaTertinggi = namaArr[i];
        }
    }

    let simbol = "";

    switch (nilaiTertinggi) {
        case 100:
            simbol += "A";
            break;
        default:
            simbol = "";
            break;
    } 
    return `Nilai tertinggi ${namaTertinggi}: ${nilaiTertinggi} (${simbol})`;
}
console.log(nilaiTertinggi(["Ali", "Budi", "Cici"], [100, 95, 78]));