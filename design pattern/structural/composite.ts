interface IStructure {
    enter(): void;
    exit(): void;
    location(): string;
    getName(): string;
}

class Housing implements IStructure {
    private name: string;
    private address: string;
    private structures: IStructure[];

    constructor(address:string) {
        this.structures = [];
        this.address = address;
    }

    addStructure(structure: IStructure) {
        this.structures.push(structure);
        return this.structures.length - 1;
    }

    enter(): void {
        console.log(`You entered the ${this.name}`);
    }

    exit(): void {
        console.log(`You exited the ${this.name}`);
    }

    location(): string {
        return this.address;
    }

    getName(): string {
        return this.name;
    }
}

class Room implements IStructure {
    private name: string;
    private address: string;

    constructor(name: string,location: string) {
        this.name = name;
        this.address = location;
    }

    enter(): void {
        console.log(`You entered the ${this.name}`);
    }

    exit(): void {
        console.log(`You exited the ${this.name}`);
    }

    location(): string {
        return this.address;
    }

    getName(): string {
        return this.name;
    }
}

const house = new Housing('1234 Elm Street');
const room = new Room('Living Room','1234 Elm Street');
house.addStructure(room);
house.enter(); // You entered the undefined
room.enter(); // You entered the Living Room
console.log(room.location()); // 1234 Elm Street
console.log(house.location()); // 1234 Elm Street
console.log(house.getName()); // undefined
console.log(room.getName()); // Living Room
