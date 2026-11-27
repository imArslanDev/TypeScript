// Function Declaration
function addNums(n1: number, n2: number): number {
  let sum = n1 + n2;
  return sum;
}

// Arrow Functions
const subtractTwoNumbers = (n1: number, n2: number): number => n1 - n2;

let result = subtractTwoNumbers(100, 50);
console.log(result);

// Void: When Function returns nothing
const greet = function (name: string): void {
  console.log(`Hello ${name}`);
};

// Operational Parameter
function greet2(name?: string): void {
  console.log(`Hello ${name ?? "Buddy"}`);
}

// Default Parameter
function greet3(name: string = "Dude"): void {
  console.log(`Hello ${name}`);
}

greet("Arslan");
greet2();
greet3();

// Never reutn type: isko 2 hi scenarios ma use krta ha
// 1- Function koi error throw kr rha ho
// 2- Ya function ma infinite loop chal rhi ho

function throwError(message: string): never {
  throw new Error(message);
}
// throwError("Custom Error Message")
// console.log("Control aya")

// Function Overloading

// Signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Real Implementation
function combine(a: number | string, b: number | string): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return `${a} ${b}`;
  } else {
    throwError("Invalid Args");
  }
}

console.log(combine(20, 80));
console.log(combine("HM", "Arslan"));

// Function overloading by parameter count

// Signatures
function welcome(): string;
function welcome(name: string): string;

// Implementation
function welcome(name?: string): string {
  return `Hello ${name ?? "Buddy"}`;
}

console.log(welcome())
console.log(welcome("Arslan"))