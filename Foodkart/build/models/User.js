"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, gender, phoneNumber, pincode, address) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.pincode = pincode;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getGender() {
        return this.gender;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getPincode() {
        return this.pincode;
    }
    getAddress() {
        return this.address;
    }
}
exports.User = User;
