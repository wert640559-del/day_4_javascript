
function selisihHafalan(hafalanArr) {
    // Validasi input dengan do while
    let valid = false;
    do {
        if (hafalanArr.length < 2) {
            return "Data hafalan harus minimal 2 minggu";
        }
        
        // Validasi setiap elemen harus number
        for (let i = 0; i < hafalanArr.length; i++) {
            if (typeof hafalanArr[i] !== 'number') {
                return "Data hafalan harus berupa angka";
            }
        }
        
        valid = true;
    } while (!valid);

    let result = [];
    
    // Loop for untuk menghitung selisih
    for (let i = 0; i < hafalanArr.length - 1; i++) {
        let selisih = hafalanArr[i + 1] - hafalanArr[i];
        let status;
        
        // Switch untuk menentukan naik/turun
        switch (true) {
            case selisih > 0:
                status = 'naik';
                break;
            case selisih < 0:
                status = 'turun';
                selisih = Math.abs(selisih);
                break;
            default:
                status = 'tetap';
        }
        
        result.push(`${i + 1}-${i + 2}: ${status} ${selisih} ayat`);
    }
    
    // Output forEach untuk format string akhir
    let output = "";
    result.forEach((item, index) => {
        if (index === 0) {
            output += `Minggu ${item}`;
        } else {
            output += `, ${item}`;
        }
    });
    
    return output;
}

// Contoh penggunaan
console.log(selisihHafalan([5,10,15,12]));
// Output: "Minggu 1-2: naik 5 ayat, 2-3: naik 5 ayat, 3-4: turun 3 ayat"

    
