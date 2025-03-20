interface IAccount {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}

class SavingsAccount implements IAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance');
        }
    }

    getBalance() {
        return this.balance;
    }
}

class CurrentAccount implements IAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance');
        }
    }

    getBalance() {
        return this.balance;
    }
}

class BankService{
    account: IAccount;

    constructor(account: IAccount){
        this.account = account;
    }

    deposit(amount: number){
        this.account.deposit(amount);
    }

    withdraw(amount: number){
        this.account.withdraw(amount);
    }

    getBalance(){
        return this.account.getBalance();
    }
}

const savingsAccount = new SavingsAccount(500);
const currentAccount = new CurrentAccount(1000);

const bankService = new BankService(savingsAccount);
bankService.deposit(100);