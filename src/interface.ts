interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean

    constructor(name: string, isGaming: boolean ) {
        this.name = name
        this.isGaming = isGaming
    }

    on(): void {
       console.log("Menyala Abangkuhh...");
    }
    off(): void {
        console.log("Off Abangku...");
    }
    
}

class MacBook implements Laptop{
    name: string;
    keboardLight: boolean;

    constructor (name: string, keyboardLight: boolean) {
        this.name = name
        this.keboardLight = keyboardLight
    }

    on(): void {
        console.log("Menyala Abangkuhh...");
     }
     off(): void {
         console.log("Off Abangku...");
     }
}

let asus = new Asus ("Asus", true)
console.log(asus.on());
console.log(asus.off());

let mekbuk = new MacBook ("MacBook", true)
console.log(mekbuk.on());
console.log(mekbuk.off());
