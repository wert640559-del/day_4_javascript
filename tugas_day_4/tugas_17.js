function hariIzinSakit(statusArr) {
    let hariIzinSakit = [];
    
    for (let i = 0; i < statusArr.length; i++) {
        let status = statusArr[i];
        
        switch (status) {
            case "Izin":
            case "Sakit":
                hariIzinSakit.push(i + 1);
                break;
        }
    }
    
    let output = "";
    if (hariIzinSakit.length > 0) {
        output = "Santri izin/sakit pada hari ke-" + hariIzinSakit.join(",");
    } else {
        output = "Tidak ada hari izin/sakit";
    }
    
    return output;
}
console.log(hariIzinSakit(["Hadir","Izin","Sakit","Hadir","Izin"]));