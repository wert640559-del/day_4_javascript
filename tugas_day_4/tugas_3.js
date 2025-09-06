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