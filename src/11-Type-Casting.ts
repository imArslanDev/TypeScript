// Type Casting / Assertion

function addOrConcat(a:number, b:number, c: "add"|"concat"): number | string {
    if(c === "add") {
        const sum = a + b
        return sum
    }
    return " " + a + b 
}

console.log(addOrConcat(20, 80, "add")) 
// console.log(addOrConcat("Arslan", "King", "concat")) 

// Ab Yaha pr use kruga TypeCastring Because currently ye err derha ha
// Error: Type 'string | number' is not assignable to type 'string'.
// const value: string = addOrConcat(20, 40, "concat")

// Solution: Type Casting
// Jab mujhe pata ha ki hamehs string hi return krugan then 
// const value: string = addOrConcat(20, 50, "concat") as string
const value: string = addOrConcat(80, 40, "concat") as string

const value2: number = addOrConcat(20, 40, "add") as number;
// This syntax aslo can found on some places
const value3: number = <number> addOrConcat(10, 110, "add") 
console.log(value)
console.log(value2)
console.log(value3)

// Isi Process Ko typecasting / type assesrtion kehta ha

const nameInput = document.getElementById("name") as HTMLInputElement
const ageInput = document.getElementById("age") as HTMLInputElement
const form = document.getElementById("form") as HTMLFormElement
const outputDiv = document.getElementById("output") as HTMLElement

form?.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameVal = nameInput.value
    const ageVal = ageInput.value
    console.log(nameVal, ageVal)
    outputDiv.innerHTML = `
    <h3>Output</h3>
    <p>User name is ${nameVal} and he is ${ageVal} year's old</p>
    `
})