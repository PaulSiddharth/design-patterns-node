class Person{
    private name: string; // accessible in the same class
    protected age: number; // accessible in child class

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

}

const person = new Person('John', 30);
console.log(person.getName());

// person.name = 'Doe'; // Error: Property 'name' is private and only accessible within class 'Person'.