// Classes
// getters, setters ✅

// Getter Note: Property read karne par chalta hai; 0 parameters aur bina () ke access hota hai.
// Setter Note: "=" se value assign karne par chalta hai; 1 parameter leta hai aur validation/state update ke kaam aata hai.

class Animal {
    public name: string
    private _age: number
    public readonly species: string
    public isHungry: boolean = true

    constructor(name: string, age: number, species: string) {
        this.name = name
        this._age = age
        this.species = species
    }

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative")
        }
        this._age = value
    }

    get hungerStatus(): string {
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`
    }

    feed(food: string): void {
        this.isHungry = false
        console.log(`${this.name} has been fed with ${food}`)
    }
}

const tom = new Animal("Tom", 2, "Cat")
const tomy = new Animal("Tomy", 4, "Dog")
const oreo = new Animal("Oreo", 1, "Rabbit")

console.log(tom)
console.log(tomy)
console.log(oreo.hungerStatus) // Oreo is hungry

oreo.feed("Carrot")            // Oreo has been fed with Carrot
console.log(oreo.hungerStatus) // Oreo is full

tom.age = 10       // setter chala
console.log(tom.age)          // 2 (getter chala)