function filterNIS(nisArr) {
    let valid = [];
    let invalid = [];

    nisArr.forEach(nis => {
        if (nis.length >= 5) {
            valid.push(nis);
        } else {
            invalid.push(nis);
        }
    });

    return `nis valid: ${valid} dan nis invalid: ${invalid}`;
    
}
console.log(filterNIS(["123456", "765432", "1234"]));
