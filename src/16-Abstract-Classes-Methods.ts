// Classes
// protected modifier           ✅
// abstract classes and methods ✅

// Protected Property Note:
// Protected member sirf us class aur uski child classes (subclasses) ke andar ("this" ke zariye) use ho sakta hai;
// class ke bahar kisi instance se (jaise max.myProtectedProperty) directly access nahi ho sakta.

// Abstract Class & Method Note:
// Abstract class ka direct instance (new Car()) nahi ban sakta; isay sirf base/blueprint ke liye banate hain taake child classes extend karein.
// Abstract method ko abstract class mein sirf declare (signature) kiya jata hai, aur uski actual implementation child class mein karna zaroori hota hai.

class Animal {
  public name: string;
  private _age: number;
  public readonly species: string;
  public isHungry: boolean = true;
  protected myProtectedProperty: number = 250000;

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

class Dog extends Animal {
  breed: string;
  command: string[];

  constructor(name: string, age: number, breed: string, command: string[]) {
    super(name, age, "Dog");
    this.breed = breed;
    this.command = command;
    console.log("From Child Class:", this.myProtectedProperty);
  }
}

const max = new Dog("Max", 8, "Roti", ["Up", "Down"]);
console.log(max);
// console.log(max.myProtectedProperty); // Error: Property 'myProtectedProperty' is protected

abstract class Car {
  make: string;
  model: number;
  variant: string;

  constructor(make: string, model: number, variant: string) {
    this.make = make;
    this.model = model;
    this.variant = variant;
  }

  abstract sound(): string;
}

class Honda extends Car {
  type: string;

  constructor(make: string, model: number, variant: string, type: string) {
    super(make, model, variant);
    this.type = type;
  }

  sound(): string {
    return `${this.make} can produce sound during ride`;
  }
}

// const car = new Car("Honda", 2020, "Oriel Prosmatic"); // Error: Cannot create an instance of an abstract class.

const hondaCivic = new Honda("Honda", 2020, "Oriel Prosmatic", "Sedan");
console.log(hondaCivic);
console.log(hondaCivic.sound());