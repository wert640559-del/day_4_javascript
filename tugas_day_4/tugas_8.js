function kelompokkanSantri(status, nama) {
    let santriMukim = [];
    let santriOnline = [];

    // Loop for paralel
    for (let i = 0; i < status.length; i++) {
        if (status[i] === "Mukim") {
            santriMukim.push(nama[i]);
        } else if (status[i] === "Online") {
            santriOnline.push(nama[i]);
        }
    }

    // Validasi minimal ada 1 santri mukim
    if (santriMukim.length === 0) {
        console.log("Peringatan: Tidak ada santri mukim!");
    }

    // Menggabungkan dengan join (lebih efisien)
    let output = "";
    if (santriMukim.length > 0) {
        output += "Santri Mukim: " + santriMukim.join(", ");
    }
    
    if (santriOnline.length > 0) {
        if (output !== "") output += " | ";
        output += "Santri Online: " + santriOnline.join(", ");
    }

    return output;
}