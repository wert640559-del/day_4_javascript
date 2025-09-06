function rekapTamat(khatamArr) {
    let count = 0;
    
    // Validasi input dengan do while
    let valid = false;
    do {
        // Pastikan array tidak kosong
        if (khatamArr.length === 0) {
            return "Data khatam tidak boleh kosong";
        }
        
        // Validasi setiap elemen harus number
        for (let i = 0; i < khatamArr.length; i++) {
            if (typeof khatamArr[i] !== 'number') {
                return "Data khatam harus berupa angka";
            }
        }
        
        valid = true;
    } while (!valid);

    // ForEach loop untuk menghitung jumlah santri yang khatam 30 juz
    khatamArr.forEach(juz => {
        // Switch untuk menangani berbagai kondisi
        switch (true) {
            case juz === 30:
                count++;
                break;
            // Bisa ditambahkan case lain jika diperlukan
        }
    });
    
    // If condition untuk menentukan output
    if (count === 0) {
        return "Tidak ada santri yang telah khatam 30 juz";
    } else {
        return `${count} santri telah khatam 30 juz`;
    }
}

// Contoh penggunaan
console.log(rekapTamat([28,30,30,30,29]));