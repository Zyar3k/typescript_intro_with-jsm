console.log("Hello Typescript");

// Implicit types
let helloWorld = "Hello, world";

// helloWorld = 5; // Type 'number' is not assignable to type 'string'

// Explicit types
let firstName: string = "Tom";
let age: number = 5;

// firstName = 5; // Type 'number' is not assignable to type 'string'
// age = "Tom"; // Type 'string' is not assignable to type 'number'

// Built-in Typescript
// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Tom", 5];
// let y: stringAndNumber = [5, "Tom"]; // Type 'string' is not assignable to type 'number'
// let z: stringAndNumber = ["Tom", "Tom"]; //Type 'string' is not assignable to type 'number'

// Enums
enum Continents {
  NorthAmerica, // 0
  SouthAmerica, // 1
  Africa, // 2
  Asia,
  Europe,
  Antarctica,
  Australia,
}

// usage
const region = Continents.Europe; // 4
