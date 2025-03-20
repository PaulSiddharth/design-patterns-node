// Abstract class

abstract class Animals {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract move(distance: number): void;
}

class Dogs extends Animals{
    move(distance: number){
        console.log('Running...');
        console.log(`${this.name} moved ${distance}m.`);
    }
}

// interface
interface Vechile{
    brand: string;
    speed: number;

    accelerate(): void;
}

class Car implements Vechile{
    brand: string;
    speed: number;

    constructor(brand: string, speed: number){
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(){
        console.log('Accelerating...');
    }
}

const myCar = new Car('Toyota', 100);
myCar.accelerate();