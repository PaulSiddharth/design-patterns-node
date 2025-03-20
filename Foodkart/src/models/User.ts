export class User {
    name: string;
    email: string;
    gender: string;
    phoneNumber: string;
    pincode: string;
    address: string;

    constructor(name: string, email: string, gender: string, phoneNumber: string, pincode: string, address: string) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.pincode = pincode;
        this.address = address;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getGender(): string {
        return this.gender;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    getPincode(): string {
        return this.pincode;
    }

    getAddress(): string {
        return this.address;
    }
}