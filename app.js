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

// let duz = 0;
// let sehv = 0;

// for (let i = 1; i <= 5; i++) {
//   if (i === 1) {
//     let cavab = prompt(
//       "1. İşıqforun qırmızı işığı yanarkən sürücü nə etməlidir?\nA) Sürəti artırıb keçməlidir\nB) Dayanmalıdır\nC) Sürəti azaldıb hərəkəti davam etdirməlidir",
//     );
//     if (cavab === "B" || cavab === "b") {
//       duz++;
//     } else {
//       sehv++;
//     }
//   } else if (i === 2) {
//     let cavab = prompt(
//       "2. Yaşayış məntəqələrində minik avtomobilləri üçün maksimum sürət həddi nə qədərdir?\nA) 60 km/saat\nB) 90 km/saat\nC) 110 km/saat",
//     );
//     if (cavab === "A" || cavab === "a") {
//       duz++;
//     } else {
//       sehv++;
//     }
//   } else if (i === 3) {
//     let cavab = prompt(
//       "3. Təhlükəsizlik kəmərindən istifadə ilə bağlı hansı qayda düzgündür?\nA) Yalnız sürücü kəmər bağlamalıdır\nB) Yalnız ön oturacaqdakı sərnişin kəmər bağlamalıdır\nC) Sürücü və bütün sərnişinlər kəmər bağlamalıdır",
//     );
//     if (cavab === "C" || cavab === "c") {
//       duz++;
//     } else {
//       sehv++;
//     }
//   } else if (i === 4) {
//     let cavab = prompt(
//       "4. Dairəvi hərəkətdə (üstünlük nişanları yoxdursa) üstünlük kimdədir?\nA) Dairədə olan nəqliyyat vasitəsində\nB) Dairəyə daxil olan nəqliyyat vasitəsində\nC) Sürəti daha yüksək olan nəqliyyat vasitəsində",
//     );
//     if (cavab === "A" || cavab === "a") {
//       duz++;
//     } else {
//       sehv++;
//     }
//   } else if (i === 5) {
//     let cavab = prompt(
//       "5. Avtomobili sərxoş halda idarə etmək barədə hansı hökm doğrudur?\nA) Qəti qadağandır\nB) Yalnız yaxın məsafələrə icazə verilir\nC) Yalnız gecə saatlarında icazə verilir",
//     );
//     if (cavab === "A" || cavab === "a") {
//       duz++;
//     } else {
//       sehv++;
//     }
//   }
// }

// alert("İmtahan bitdi! Düz cavab: " + duz + "Səhv cavab: " + sehv);

// if (duz < 4) {
//   alert("Kəsildiniz!");
// } else {
//   alert("Təbriklər, imtahanı keçdiniz!");
// }

//==================================================================

// let a = ["Alma", "armud", "nar"];

// a.push("banan");
// console.log(a);

//----------------------------------------------------------------

// let a = ["amil", "rəşad", "cefer", "fuad", "elvin"];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

//-----------------------------------------------------------------

// let prices = [10, 25, 15, 40, 30];
// prices[1] = 20;

// console.log(prices);

//----------------------------------------------------------------

// let movies = ["Inception", "Interstellar", "Avatar", "Titanic"];
// let a = prompt();

// if (movies.includes(a) == true) {
//   console.log("Bu film artıq siyahıdadır");
// } else {
//   movies.push(a);
// }

// console.log(movies);

//---------------------------------------------------------------

// let cart = ["iPhone", "AirPods", "Mouse"];
// let a = prompt("Secdiyin mehsulu yaz: " + cart);

// if (cart.includes(a)) {
//   let b = cart.indexOf(a);
//   cart.splice(b, 1);
// } else {
//   cart.push(a);
// }
// console.log(cart);

//=============================================================

//home work

// let salaries = [800, 1200, 1500, 950, 2000];
// let newSalaries = salaries.map((salaries) => salaries * 1.15);

// if (newSalaries.every((salaries) => salaries > 900)) {
//   console.log("hər kəs qəşəng maaş alır");
// } else {
//   console.log("vəziyyət pisdir");
// }
// console.log(newSalaries);

//============================================================

// let telebeler = [];

// while (true) {
//   let a = prompt("telebe adlarini daxil et");
//   if (a == "bitdi") {
//     break;
//   }
//   telebeler.push(a);
// }
// telebeler.sort();
// console.log(telebeler);

//-----------------------------------------------------------

// let eded = [15, 3, 8, 2, 10];
// let reqem = eded.sort((a, b) => a - b);

// let hasil = reqem.at(-1) * reqem.at(0);
// let cixma = reqem.at(-1) - reqem.at(0);
// let netice = hasil - cixma;
// console.log(reqem);
// console.log(hasil);
// console.log(cixma);
// console.log(netice);

//--------------------------------------------------------

// let products = [
//   ["dell", 600],
//   ["samsung", 700],
//   ["lenovo", 550],
//   ["hp", 800],
//   ["asus", 650],
// ];

// products.forEach((x) => {
//   let a = x.join(" - ") + " AZN";
//   console.log(a);
// });

//========================================================

// let numbers = [4, 7, 2, 9, 1];
// alert(numbers);

// let tapdi = false;

// for (let i = 0; i < 3; i++) {
//   let a = prompt("reqemleri daxil et");

//   if (a === numbers.join(",")) {
//     alert("Aferin!");
//     tapdi = true;
//     break;
//   }
// }
// if (!tapdi) {
//   alert("Uduzdunuz!");
// }

//=======================================================

// let ad = prompt("Ad daxil et!");
// let soyad = prompt("Soyad daxil et!");

// let herf = ad.charAt(0);
// console.log(herf + "." + soyad);

//------------------------------------------------------

// let a = prompt("Palindrom sozleri daxil et!");

// let kicikHerfler = a.toLowerCase();
// let b = kicikHerfler.split("").reverse().join("");

// if (kicikHerfler === b) {
//   console.log("Palindromdu");
// } else {
//   console.log("Palindrom deyil");
// }
// console.log(a);

//-----------------------------------------------------

// let a =
//   "Azərbaycan          Respublikasının    Dövlət                 himni boşluqları sil düzgün cümləni yenidən yaz         ";

// let b = a.split(" ").filter(Boolean).join(" ");
// console.log(a)
// console.log(b);

//======================================================

// let arr = [];

// while (true) {
//   let input = prompt("Eded daxil et");

//   if (input === "Cancel" || input.trim() === "") {
//     break;
//   }
//   arr.push(+input);
// }
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(arr);
// console.log(max);
// console.log(min);
// console.log(`${max} x ${min} = ${max * min}`);

//-----------------------------------------------------

// let ad = prompt("Ad daxil et!");
// let yash = +prompt("Yaş daxil et!");
// let city = ["Dubay", "London", "Tokio", "Nyu-York"];
// let car = ["Porsche", "BMW", "Mercedes", "Tesla"];
// let work = ["Proqramçı", "Biznesmen", "Mühəndis", "Dizayner"];
// let gelecekYash = yash + 5;

// let randomCity = Math.floor(Math.random() * city.length);
// let randomCar = Math.floor(Math.random() * car.length);
// let randomWork = Math.floor(Math.random() * work.length);

// console.log(
//   `Salam ${ad}, 5 ildən sonra siz ${gelecekYash} yaşında olacaqsınız, ${city[randomCity]} şəhərində yaşayacaqsınız, ${car[randomCar]} idarə edəcəksiniz və ${work[randomWork]} kimi çalışacaqsınız.`,
// );

//======================================================

// let arr = [3, 6, 2, 9, 8];

// function push(yeniDeyer) {
//   arr[arr.length] = yeniDeyer;
//   console.log(arr.flat(1));
//   return arr.length;
// }

// push([4,7,8,9,2,4]);

//---------------------------------------------------------

// let arr = [2, 4, 6, 3, 9];
// const unShift = (x) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i + 1] = arr[i];
//   }
//   arr[0] = x;
//   console.log(arr);
//   return arr.length;
// };

// unShift(5);

//-----------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// function del(arr, x) {
//   arr.length = arr.length - x;
//   console.log(arr);
//   return arr;
// }

// del(arr, 3);

//-----------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// const artir = (arr, baslangic, son, artim) => {
//   for (let i = baslangic; i <= son; i++) {
//     arr[i] += artim;
//   }
//   console.log(arr);
//   return arr;
// };
// artir(arr, 1, 3, 10);

//===========================================================

// let mehsul = [
//   {
//     Title: " Portativ Doldurucu (Powerbank)",
//     Description: "20000 mAh tutumlu, tezli doldurma dəstəkli xarici batareya",
//     Price: "65.0 AZN",
//     Stock: "25 ədəd",
//   },
//   {
//     Title: "Simsiz Qulaqlıq (Wireless Earbuds)",
//     Description: "Səs-küyü ləğv edən (ANC) funksiyalı blutuz qulaqlıq",
//     Price: "120.00 AZN",
//     Stock: "14 ədəd",
//   },
//   {
//     Title: "Mexaniki Klaviatura",
//     Description: "RGB işıqlandırmalı, göy svitçli oyun klaviaturası",
//     Price: "89.90 AZN",
//     Stock: "8 ədəd",
//   },
// ];

// const yeniMehsul = () => {
//   let title = prompt("Məhsulun adını daxil edin:");
//   let description = prompt("Məhsulun təsvirini daxil edin:");
//   let price = prompt("Məhsulun qiymətini daxil edin:");
//   let stock = prompt("Məhsulun sayını daxil edin:");

//   let obyekt = {
//     Title: title,
//     Description: description,
//     Price: price,
//     Stock: stock,
//   };

//   mehsul.push(obyekt);
//   console.log(mehsul);
// };

// yeniMehsul();

//===================================================================

//home task

let player = {
  name: "Oyuncu 1",
  xp: 0,
  level: 1,
};

const checkLevel = () => {
  if (player.xp >= 100) {
    player.level++;
    player.xp = 0;
    if (player.level === 5) {
      console.log("Mənim Rise of Kingdom-da 80 milyon gücüm var!");
    }
  }
};

const addXP = () => {
  let a = prompt("XP qazanmaq üçün 'point', çıxmaq üçün 'exit' yazın:");
  while (a !== "exit") {
    if (a === "point") {
      let b = Math.ceil(Math.random() * 50);
      player.xp += b;
      console.log(
        `+${b} XP qazandınız! Cari XP: ${player.xp}, Level: ${player.level}`,
      );
      checkLevel();
    }
    a = prompt("XP qazanmaq üçün 'point', çıxmaq üçün 'exit' yazın:");
  }
};

const showPlayer = () => {
  console.log(player);
};

addXP();
showPlayer();
