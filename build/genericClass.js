"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// let numbers = new List<number>(1, 2, 3)
// numbers.add(4)
// numbers.addMultiple(5, 6, 2)
// console.log(numbers.getAll());
let random = new List(1, "gheral", 2, "HAqi");
random.add("dusahdu");
random.add(46);
random.addMultiple("dubadb", 45, "sdh");
console.log(random.getAll());
