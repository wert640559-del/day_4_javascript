function statusNilai(nilaiArr) {
    // Validasi minimal 1 data dengan do while
    let valid = false;
    do {
        if (nilaiArr.length === 0) {
            return "Data nilai tidak boleh kosong";
        }
        
        // Validasi setiap elemen harus number
        for (let i = 0; i < nilaiArr.length; i++) {
            if (typeof nilaiArr[i] !== 'number') {
                return "Data nilai harus berupa angka";
            }
        }
        
        valid = true;
    } while (!valid);

    let result = [];
    
    // For loop untuk menentukan status setiap nilai
    for (let i = 0; i < nilaiArr.length; i++) {
        let status;
        
        // Switch untuk menentukan status berdasarkan nilai
        switch (true) {
            case nilaiArr[i] >= 80:
                status = "Baik";
                break;
            case nilaiArr[i] >= 60:
                status = "Cukup";
                break;
            default:
                status = "Kurang";
        }
        
        result.push(`${nilaiArr[i]}: ${status}`);
    }
    
    // Output forEach untuk menggabungkan hasil
    let output = "";
    result.forEach((item, index) => {
        if (index === 0) {
            output += item;
        } else {
            output += `, ${item}`;
        }
    });
    
    return output;
}

// Contoh penggunaan
console.log(statusNilai([80,60,75,55]));