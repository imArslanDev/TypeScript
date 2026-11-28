// Classes
// Child Class   ✅
// Super Keyword ✅

class Animal {
  public name: string;
  private _age: number;
  public readonly species: string;
  public isHungry: boolean = true;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this._age = age;
    this.species = species;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }

  get hungerStatus(): string {
    return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
  }

  feed(food: string): void {
    this.isHungry = false;
    console.log(`${this.name} has been fed with ${food}`);
  }
}

const tom = new Animal("Tom", 2, "Cat");
const oreo = new Animal("Oreo", 1, "Rabbit");

class Dog extends Animal {
    breed:string
    command: string[]
    constructor(name:string, age:number, breed:string, command:string[]) {
        super(name, age, "Dog")
        this.breed = breed
        this.command = command
    }
}

const charlie = new Dog("Charlie", 8, "Roti", ["Sit", "Come", "Run"])
const max = new Dog("Max", 8, "Roti", ["Up", "Down"])

console.log(charlie.hungerStatus)
charlie.feed("Roti")
console.log(charlie.hungerStatus)

console.log(max.hungerStatus)
max.feed("Chanay")
console.log(max.hungerStatus)
