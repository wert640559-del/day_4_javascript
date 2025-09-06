function statJam(jamArr) {
    let total = 0;
    let terbanyak = jamArr[0];
    let tersedikit = jamArr[0];

    for (let i = 0; i < jamArr.length; i++) {
        total += jamArr[i];

        if (jamArr[i] > terbanyak) {
            terbanyak = jamArr[i];
        }

        if (jamArr[i] < tersedikit) {
            tersedikit = jamArr[i];
        }
    }
    // jamArr.forEach(jam => {
    //     total += jam;

    //     if (jam > terbanyak) {
    //         terbanyak = jam;
    //     }

    //     if (jam <= tersedikit) {
    //         tersedikit = jam;
    //     }
    // });

    const rataRata = total / jamArr.length;

    return `total jam belajar terbanyak: ${terbanyak}, tersedikit ${tersedikit}, dan rata-rata ${rataRata} jam}`;
}
console.log(statJam([3,6,2,5]));