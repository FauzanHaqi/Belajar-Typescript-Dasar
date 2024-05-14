"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Menyala Abangkuhh...");
    }
    off() {
        console.log("Off Abangku...");
    }
}
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keboardLight = keyboardLight;
    }
    on() {
        console.log("Menyala Abangkuhh...");
    }
    off() {
        console.log("Off Abangku...");
    }
}
let asus = new Asus("Asus", true);
console.log(asus.on());
console.log(asus.off());
let mekbuk = new MacBook("MacBook", true);
console.log(mekbuk.on());
console.log(mekbuk.off());
