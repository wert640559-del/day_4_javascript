function rekapUsia(usiaArr) {
    do {
        if (usiaArr.length === 0) {
            return "Tulis dong data usianya, jangan kosong";
        } 
    } while (false);

    let hasil = [];

    for (let i = 0; i < usiaArr.length; i++) {
        let usia = usiaArr[i];
        let status = "";

        if (usia >= 22) {
            status = "Dewasa";
        } else if (usia >= 11 && usia < 22) {
            status = "Remaja";
        } else {
            status = "Anak-anak";
        }

        switch (status) {
            case "Dewasa":
                hasil.push(`santri ${i + 1}: ${status} (${usia} tahun)`);
                break;
            case "Remaja":
                hasil.push(`santri ${i + 1}: ${status} (${usia} tahun)`);
                break;
            case "Anak-anak":
                hasil.push(`santri ${i + 1}: ${status} (${usia} tahun)`);
                break;
        }
        
    }
    return `${hasil.join("\n")}`;
}
console.log(rekapUsia([10, 30, 17, 20]));