"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name;
    }
}
exports.User = User;
let user = new User("HAQI", 16);
console.log(user.name);
// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "HI";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "Email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// let admin = new Admin("0835436728", "Habil", 16);
// admin.getRole();
// admin.setName("HAQI");
// admin.getName();
// admin.email = "huyf";
// console.log(admin.email);
// Static Property dan Static method 
let admin = Admin.getNameRole();
console.log(admin);
