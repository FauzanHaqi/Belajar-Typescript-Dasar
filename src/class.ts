export class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name;
  }

  getName = (): string => {
    return this.name;
  };
}

let user = new User("HAQI", 16);

console.log(user.name);

// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole () {
    return "HI";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("0835436728", "Habil", 16);
// admin.getRole();
// admin.setName("HAQI");
// admin.getName();

// admin.email = "huyf";
// console.log(admin.email);

 
// Static Property dan Static method 
let admin = Admin.getNameRole()

console.log(admin);
