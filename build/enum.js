"use strict";
// Belajar Tipe Data
// Numeric Enum
// enum Month {
//   JAN = 1,
//   FEB = 100000000,
//   MAR,
//   APR = 28,
//   MAY,
// }
// console.log(Month.JAN);
// String Enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "MAret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month.MAY);
