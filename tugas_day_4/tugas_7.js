// function rekapKegiatan(kegiatanArr) {
//     do {
//         if (kegiatanArr.length === 0) {
//             return "Apa kegiatan kamu!, jangan malas malasan!, harus ada kegiatan yang bermanfaat";
//         }
//     } while (false);

//     let coding = 0;
//     let ngaji = 0;
//     let sholat = 0;

//     for (let i = 0; i < kegiatanArr.length; i++) {
//         let kegiatan = kegiatanArr[i];

//         switch (kegiatan) {
//             case "Coding":
//                 coding++;
//                 break;
//             case "Ngaji":
//                 ngaji++;
//                 break;
//             case "Sholat":
//                 sholat++;
//                 break;
//         }
//     }

//     let hasil = [];
//     if (coding > 0) hasil.push(`Coding: ${coding} kali`);
//     if (ngaji > 0) hasil.push(`Ngaji: ${ngaji} kali`);
//     if (sholat > 0) hasil.push(`Sholat: ${sholat} kali`);

//     return hasil.join("\n");
// }

// console.log(rekapKegiatan(["Coding", "Ngaji", "Coding", "Sholat", "Ngaji"]));
