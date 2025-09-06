function totalKegiatan(partArr) {
    let total = 0;
    let max = partArr[0];
    let min = partArr[0];
    
    do {
        if (partArr.length === 0) {
            return "Data kegiatan tidak boleh kosong";
        }
    } while (false);


    for (let i = 0; i < partArr.length; i++) {
        total += partArr[i];

        if (partArr[i] > max) {
            max = partArr[i];
        }

        if (partArr[i] < min) {
            min = partArr[i];
        }
    }

    // partArr.forEach(part => {
    //     total += part;

    //     if (part > max) {
    //         max = part;
    //     }

    //     if (part < min) {
    //         min = part;
    //     }
    // })

    const rataRata = total / partArr.length;

    return `total partisipasi: ${total} kali, rata-rata partisipasi: ${rataRata} kali, kegiatan terbesar: ${max} kali, kegiatan terkecil: ${min} kali}`;
    // console.log(total);
}
console.log(totalKegiatan([2, 3, 4, 1]));