"use strict";
// // Tipe data pada balikan function
// function getName(): string{
//     return "String"
// }
// console.log(getName());
// function getAge(): number{
//     return 2
// }
// console.log(getAge());
// function printName (): void{
//     console.log("Void = Tidak Boleh Return");
// }
// printName()
///////////////////////////////////////////////////////////////////////////////////////////
// Tipe Data Pada Argumen
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(1000, 3);
console.log(result);
const Add = (nomor1, nomor2) => {
    return nomor1 + nomor2;
};
// Function Default Parameter
// Penjelasan Parameter defaultnya adalah last yg berisi haqi. jikalau user nginput first dan last maka yg dia input akan keluar, namun jika dia nginput hanya first maka default/haqi akan digunakan
const fullName = (first, last = "Haqi") => {
    return first + " " + last;
};
console.log(fullName("Fauzan", "LOL"));
// Optional Parameter 
// // Val 2 = OPtional, berisi undefine jika tidak diisi
// const getUmur = (val1: number, val2?: number): number => {
//   return val1 + val2
// }
// console.log(getUmur(1, 0));
