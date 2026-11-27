// any

let anyVariable: any;

anyVariable = 20
anyVariable = "Good"
anyVariable = true
anyVariable = undefined
anyVariable = null
anyVariable = {name: "Golu"}
anyVariable = ["Apple", "Mango"]


// unknown
let someVariable: unknown
let boolVar: boolean
someVariable = 40

if(typeof someVariable === "number") {
    someVariable.toFixed(2)
}


someVariable = true
if(typeof someVariable === "boolean") {
    boolVar = someVariable  // Yaha theek ha 
}

// boolVar = someVariable  // Err dega