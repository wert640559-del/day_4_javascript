function formatGuru(namaArr, genderArr) {
    // Validasi panjang array harus sama
    if (namaArr.length !== genderArr.length) {
        return "Panjang array nama dan gender harus sama";
    }
    
    let result = [];
    
    // For loop paralel untuk memproses setiap guru
    for (let i = 0; i < namaArr.length; i++) {
        let title;
        
        // Switch berdasarkan gender
        switch (genderArr[i]) {
            case "L":
                title = "Ustadz";
                break;
            case "P":
                title = "Ustadzah";
                break;
            default:
                title = "Guru";
        }
        
        result.push(`${title} ${namaArr[i]}`);
    }
    
    // Validasi dengan while
    let i = 0;
    while (i < genderArr.length) {
        if (genderArr[i] !== "L" && genderArr[i] !== "P") {
            return "Gender harus 'L' atau 'P'";
        }
        i++;
    }
    
    // Output forEach untuk menggabungkan hasil
    let output = "";
    result.forEach((item, index) => {
        if (index === 0) {
            output += item;
        } else {
            output += `; ${item}`;
        }
    });
    
    return output;
}
console.log(formatGuru(["Ahmad", "Fatimah"], ["L", "P"]));