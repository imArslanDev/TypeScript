// Classes
// declare a class   ✅
// readonly property ✅

class Animal {
    name:string
    age: number
    readonly species: string
    constructor(name: string, age: number, species: string) {
        this.name = name
        this.age = age
        this.species = species
    }
}


const tom = new Animal("Tom", 2, "Cat")
console.log(tom)
// tom.species = "Dog"  // Not Allowed Error Dega BCZ of read only
