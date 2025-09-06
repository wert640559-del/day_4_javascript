function kelompokKegiatan(arrKegiatan) {
    let ngaji = 0;
    let coding = 0;
    let sholat = 0;
    let olahraga = 0;


    for (let i = 0; i < arrKegiatan.length; i++) {
        let kegiatan = arrKegiatan[i];

        if (kegiatan === "Ngaji") {
            ngaji++;
        } else if (kegiatan === "Coding") {
            coding++;
        } else if (kegiatan === "Sholat") {
            sholat++;
        } else if (kegiatan === "Olahraga") {
            olahraga++;
        }
    }
    return `ngaji: ${ngaji} kali, coding: ${coding} kali, sholat: ${sholat} kali, olahraga: ${olahraga} kali`;
}
console.log(kelompokKegiatan(["Sholat","Ngaji","Olahraga","Coding","Ngaji"]));