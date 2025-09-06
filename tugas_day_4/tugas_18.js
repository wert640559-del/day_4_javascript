function validasiNIS(nisArr) {
    let valid = [];
    let invalid = [];

    

    nisArr.forEach(nis => {
        if (nis.length >= 6) {
            valid.push(nis);
        } else if (nis.length === 0) {
                invalid.push("data kosong!");
            } else {
            invalid.push(nis);
        }
    });

    return `NIS valid: ${valid} dan NIS invalid: ${invalid}`;

    do {
            
    } while (false);
    
    
}
console.log(validasiNIS(["", "654321", "54321"]));