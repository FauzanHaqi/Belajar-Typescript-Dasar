import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("ZenBook", true, true);
console.log(asus);

let macbook = new MacBook(2017, true, true);
console.log(macbook);
macbook.a()
macbook.b()
