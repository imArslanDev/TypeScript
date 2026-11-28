// Classes 
// class fields              ✅
// public, private modifiers ✅
// private methods           ✅

// By Default all are public likho ya na likho

// Privite ka mtlb ha ki is partocular proerty method ko ma siorf class ke andr hi use kr skta hoon
// class fields: Jo ki directly class sa acccosiated ho constructor pr depend na krain
class Animal {
    public name:string
    private age: number
    public readonly species: string
    // class fields
    public isHungry: boolean = true
    constructor(name: string, age: number, species: string) {
        this.name = name
        this.age = age
        this.species = species
    }

    hungerStatus() {
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`
    }
}


const tom = new Animal("Tom", 2, "Cat")
const tomy = new Animal("Tomy", 4, "Dog")
const oreo = new Animal("Oreo", 1, "Rabbit")
// Privite krne pr error dega but still compile hokr outp;ut dedega but ye error developer ke liyia benifial ha
// console.log(tom.age) 


console.log(tom)
console.log(tomy)
console.log(oreo.hungerStatus())