// Import Interface From File
import type { PersonInterface as BaseInterface } from "./7-Export-Interface-Type"
import type { PersonType as BaseType } from "./7-Export-Interface-Type"


// Interface Extend krna using Interface
interface PersonInterface extends BaseInterface{
    profession: string,
    YOE: number
}

// Interface Extend krna using Type
interface PersonInterface extends BaseType{
    profession: string,
    YOE: number
}

type PersonType = BaseType & {
    profession: string,
    YOE: number
}

// Not Allowed
// type PersonType extends BaseType {}

// But Is trha kr skta ha

const person: PersonInterface = {
    firstName: "HM",
    lastName: "Arslan",
    age: 20,
    address: {
        city: "Lahore",
        country: "Pakistan",
        houseNo: 1234,
        zipcode: 54560
    },
   
    email: "im@email.com",
    profession: "Sofware Engineer",
    YOE: 3
}

const person2: PersonType = {
    firstName: "Mir",
    lastName: "Hadi",
    age: 20,
    address: {
        city: "Lahore",
        country: "Pakistan",
        houseNo: 5678,
        zipcode: 9876
    },
    email: "im@email.com",
    profession: "Actor",
    YOE: 2
}

console.log(person)
console.log(person2)