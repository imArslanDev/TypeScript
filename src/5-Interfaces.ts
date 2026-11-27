// Interface me allowed ha reopen krna same interface ko

// Interfaces are use with Object only

// Interface
interface Person {
  firstName: string;
  lastName: string;
}

// Interfaces ke andr type bhi use kr skta ha:
type Age = number;

type Address = {
  country: string;
  zipcode: number;
  houseNo: number;
  city: string;
};

interface Person {
  age: Age;
  address: Address;
  email: string;
}

const person: Person = {
  firstName: "HM",
  lastName: "Arslan",
  age: 20,
  address: {
    city: "Lahore",
    country: "Pakistan",
    houseNo: 1234,
    zipcode: 54560,
  },

  email: "im@email.com",
};
