console.log("Hello Typescript");
// Interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "John",
  id: 4,
  // age: 25,  Type '{ name: string; id: number; age: number; }' is not assignable to type 'User'.
  // Object literal may only specify known properties, and 'age' does not exist in type 'User'
};

// Composing types => Union
type WindowStates = "open" | "closed" | "minimized";

// const windowState: WindowStates = "I dont know "; // Type '"I dont know "' is not assignable to type 'WindowStates'

type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const odd: OddNumberUnderTen = 5;

const getLength = (param: string | string[]) => {
  return param.length;
};

getLength("test"); // 4
getLength(["test", "test1"]); // 2

// getLength(4); // Argument of type 'number' is not assignable to parameter of type 'string | string[]'

// Typescript in cra
// npx create-react-app ./ --template typescript

/* ********************************************************************************** */

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
