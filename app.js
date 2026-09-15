// let hefte = +prompt("gunleri yaz");

// switch (hefte) {
//   case 1:
//     console.log("1 ci gundu");
//     break;
//   case 2:
//     console.log("2 ci gundu");
//     break;
//   case 3:
//     console.log("3 ci gundu");
//     break;
//   case 4:
//     console.log("4 ci gundu");
//     break;
//   case 5:
//     console.log("5 ci gundu");
//     break;
//   case 6:
//     console.log("6 ci gundu");
//     break;
//   case 7:
//     console.log("7 ci gundu");
//     break;
//   default:
//     console.log("1-7 arasi reqem yaz");
// }

//===================================================

// let a = Number(prompt("ededi daxil et"));

// for (let i = a; i > 0; i--) {
//   console.log(i);
// }

// let i = 1;

// while (i > 10) {
//   console.log(i);
//   i++;
// }

// let isBool = true;
// while (isBool) {
//   let a = prompt("Mehsulun qiymetin yazin yazin");

//   if (a === "stop") {
//     isBool = false;
//     break;
//   }
//   console.log(a);
// }

// let a = Number(prompt("ededi daxil et"));

// for (let i = a; i > 0; i--) {
//   console.log("*");
// }

// let eded = prompt("Ededi daxil et");

// let a = 1;
// let b = 1;
// let c;

// let i = 3;

// while (i <= eded) {
//   c = a + b;
//   a = b;
//   b = c;
//   i++;
// }

// console.log(b);

// for (i = 0; i < 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

//================================================================
//home work

// let pin = +prompt("Pini daxil et");

// switch (pin) {
//   case 1234:
//     console.log("Giris ugurludur!");
//     break;
//   default:
//     console.log("Yanlis PIN!");
// }

//----------------------------------------------------------------

// let gun = prompt("Oxudugun gunu yaz");
// let sehife = 300;
// while (sehife > 0) {
//   sehife = sehife - gun;
//   gun++;
// }
// console.log(gun);

//-----------------------------------------------------------------

// let eded = +prompt("ededi daxil et");

// for (let i = 1; i <= eded; i++) {
//   if (eded % i == 0) {
//     console.log(i);
//   }
// }

//----------------------------------------------------------------

// let eded = +prompt("ededi daxil et");
// let sade = 0;
// for (let i = 1; i <= eded; i++) {
//   if (eded % i == 0) {
//     console.log(i);
//     sade++;
//   }
// }

//--------------------------------------------------------------

// let a = 30;

// while (true) {
//   let eded = +prompt("Reqemi tap!");

//   if (eded > a) {
//     alert("Asagi dus!");
//   } else if (eded < a) {
//     alert("Yuxari qalx!");
//   } else {
//     console.log("Aferin!");
//     break;
//   }
// }

//-------------------------------------------------------------

// for (let i = 1; i < 2; i++) {
//   let a = +prompt("Pizzanı seç");
//   let pizzaAdi;
//   let qiymeti;

//   switch (a) {
//     case 1:
//       pizzaAdi = "Mozzarella";
//       qiymeti = 12;
//       break;
//     case 2:
//       pizzaAdi = "Margherita";
//       qiymeti = 15;
//       break;
//     case 3:
//       pizzaAdi = "Pepperoni";
//       qiymeti = 18;
//       break;
//     case 4:
//       pizzaAdi = "BBQ Chicken";
//       qiymeti = 20;
//       break;
//     default:
//       alert("1 ve 4 arasi reqem yaz");
//   }

//   let b = prompt("Əlavə pendir istəyirsiniz?");
//   if (b === "beli") {
//     qiymeti = qiymeti + 3;
//   }
//   console.log(pizzaAdi, qiymeti);
// }

//============================================================

let duz = 0;
let sehv = 0;

for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    let cavab = prompt(
      "1. İşıqforun qırmızı işığı yanarkən sürücü nə etməlidir?\nA) Sürəti artırıb keçməlidir\nB) Dayanmalıdır\nC) Sürəti azaldıb hərəkəti davam etdirməlidir",
    );
    if (cavab === "B" || cavab === "b") {
      duz++;
    } else {
      sehv++;
    }
  } else if (i === 2) {
    let cavab = prompt(
      "2. Yaşayış məntəqələrində minik avtomobilləri üçün maksimum sürət həddi nə qədərdir?\nA) 60 km/saat\nB) 90 km/saat\nC) 110 km/saat",
    );
    if (cavab === "A" || cavab === "a") {
      duz++;
    } else {
      sehv++;
    }
  } else if (i === 3) {
    let cavab = prompt(
      "3. Təhlükəsizlik kəmərindən istifadə ilə bağlı hansı qayda düzgündür?\nA) Yalnız sürücü kəmər bağlamalıdır\nB) Yalnız ön oturacaqdakı sərnişin kəmər bağlamalıdır\nC) Sürücü və bütün sərnişinlər kəmər bağlamalıdır",
    );
    if (cavab === "C" || cavab === "c") {
      duz++;
    } else {
      sehv++;
    }
  } else if (i === 4) {
    let cavab = prompt(
      "4. Dairəvi hərəkətdə (üstünlük nişanları yoxdursa) üstünlük kimdədir?\nA) Dairədə olan nəqliyyat vasitəsində\nB) Dairəyə daxil olan nəqliyyat vasitəsində\nC) Sürəti daha yüksək olan nəqliyyat vasitəsində",
    );
    if (cavab === "A" || cavab === "a") {
      duz++;
    } else {
      sehv++;
    }
  } else if (i === 5) {
    let cavab = prompt(
      "5. Avtomobili sərxoş halda idarə etmək barədə hansı hökm doğrudur?\nA) Qəti qadağandır\nB) Yalnız yaxın məsafələrə icazə verilir\nC) Yalnız gecə saatlarında icazə verilir",
    );
    if (cavab === "A" || cavab === "a") {
      duz++;
    } else {
      sehv++;
    }
  }
}


alert("İmtahan bitdi! Düz cavab: " + duz + "Səhv cavab: " + sehv);

if (duz < 4) {
  alert("Kəsildiniz!");
} else {
  alert("Təbriklər, imtahanı keçdiniz!");
}
