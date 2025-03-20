class User {
    name: string;
    email: string;
    password: string;
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    login() {
        console.log(`${this.name} logged in`);
    }

    logout() {
        console.log(`${this.name} logged out`);
    }

    changePassword(newPassword: string) {
        this.password = newPassword;
        console.log(`${this.name} changed password`);
    }

    getName() {
        return this.name;
    }
}