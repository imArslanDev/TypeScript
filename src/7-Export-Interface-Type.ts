export interface PersonInterface {
    firstName: string, 
    lastName: string,
    address: {
    country: string,
    zipcode: number,
    houseNo: number,
    city: string,
    },
    age: number,
    email: string
}



export type PersonType =  {
    firstName: string, 
    lastName: string,
    address: {
    country: string,
    zipcode: number,
    houseNo: number,
    city: string,
    },
    age: number,
    email: string
}

