// Arrays
// const fruits: string[]
// const numbers: number[]

// Not Allowed Error Dega
// numbers.push("Hundred") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Type Inference
const fruits = ["Apple", "Mango", "Banana", "Orange", 12, 30, 50];
const numbers = [20, 30, 40, 50, 60];

// Auto Detect Krlega and error dega
// Becuase Only Numbers and Strings allowed ha
// fruits.push({name: "Arslan"})

// Same for
// numbers.push("Name")

// Now Explicitly Btane ki array ma kia ayega
const myArr: (number | string | object)[] = [
  100,
  "King",
  { userName: "ArslanKing" },
];

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

const persons: readonly Person[] = [
  { firstName: "HM", lastName: "Arslan" },
  { firstName: "Zoya", lastName: "khan", age: 24 },
  { firstName: "Mir", lastName: "Hadi" , age: 25},
];

console.log(persons)
// persons.push() // Readonly per push nhi kr stka sirf read kr skta ho