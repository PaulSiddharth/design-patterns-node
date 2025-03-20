class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    move(distance: number = 0){
        console.log(`${this.name} moved ${distance}m.`);
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    move(distance: number = 5){
        console.log('Running...');
        super.move(distance);
    }
}

const dog = new Dog('Tommy');
dog.move(); // Running... Tommy moved 5m.