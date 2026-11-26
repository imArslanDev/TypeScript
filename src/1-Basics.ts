let myName: string = "HM Arslan"
// myName = 100 // Error dega

let myAge: number = 24
let isAllowed: boolean = true

// Type inference
let name = "Arslan"
let age = 20
let isMale = true


// name = 20 // Error: Type 'number' is not assignable to type 'string'.
// age = "20" // Error: Type 'string' is not assignable to type 'number'.
// isMale = "Yes" // Error: Type 'string' is not assignable to type 'boolean'.

// Union Type
let userAge: string | number
