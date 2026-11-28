// Classes
// implement interfaces     ✅

// interface CarInfoInterface {
//   name: string;
//   make: string;
//   model: number;
//   varient: string;
//   aboutCar: string;
// }

// class Car implements CarInfoInterface {
//   name: string;
//   make: string;
//   model: number;
//   varient: string;
//   constructor(name: string, make: string, model: number, varient: string) {
//     this.name = name;
//     this.make = make;
//     this.model = model;
//     this.varient = varient;
//   }

//   get aboutCar(): string {
//     return `You have ${this.name} ${this.model} model ${this.varient} varient`;
//   }
// }

// const car1 = new Car("Honda Civic", "Honda", 2018, "1.8 Oriel Prosmatic");
// console.log(car1.aboutCar);


// short syntax for constructor method ✅
interface CarInfoInterface {
  name: string;
  make: string;
  model: number;
  varient: string;
  aboutCar: string;
}

class Car implements CarInfoInterface {
  // Bhir and Constructor scope ka nadr likhne ki btai directly construcotr ma public/privite likh do and ye exactly same klam krega jiasa phel kr rha tha but bohot short sysntax ho jai ga
  constructor(public name: string, public make: string, public model: number, public varient: string) {}

  get aboutCar(): string {
    return `You have ${this.name} ${this.model} model ${this.varient} varient`;
  }
}

const car1 = new Car("Honda Civic", "Honda", 2018, "1.8 Oriel Prosmatic");
console.log(car1.aboutCar);
