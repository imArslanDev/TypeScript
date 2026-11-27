
// Types
type Person = {
    firstName: string, 
    lastName: string,
    age?: number,
    address: Address,
    email: string
}

interface Address {
    country: string,
    zipcode: number,
    houseNo: number,
    city: string,
}

// This is Not Allowed
// Dubara sa type Person nhi kr skta error dega: Error: Duplicate identifier 'Person'.
// type Person = {
//     address: string,
//     email: string
// }

// Types can be use with Objects, Arrays, Tuples & Primitives

const person: Person = {
    firstName: "HM",
    lastName: "Arslan",
    age: 20,
    address: {
        city: "Lahore",
        country: "Pakistan",
        houseNo: 1234,
        zipcode: 54560 
    },
    email: "im@email.com"
}