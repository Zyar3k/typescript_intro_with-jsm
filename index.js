console.log("Hello Typescript");
var user = {
    name: "John",
    id: 4
};
"open" | "closed" | "minimized";
"locked" | "unlocked";
1 | 3 | 5 | 7 | 9;
var odd = 5;
var getLength = function (param) {
    return param.length;
};
getLength("test"); // 4
getLength(["test", "test1"]); // 2
// getLength(4); // Argument of type 'number' is not assignable to parameter of type 'string | string[]'
// Typescript in cra
// npx create-react-app ./ --template typescript
/* ********************************************************************************** */
// Implicit types
var helloWorld = "Hello, world";
// helloWorld = 5; // Type 'number' is not assignable to type 'string'
// Explicit types
var firstName = "Tom";
var age = 5;
var x = ["Tom", 5];
// let y: stringAndNumber = [5, "Tom"]; // Type 'string' is not assignable to type 'number'
// let z: stringAndNumber = ["Tom", "Tom"]; //Type 'string' is not assignable to type 'number'
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["NorthAmerica"] = 0] = "NorthAmerica";
    Continents[Continents["SouthAmerica"] = 1] = "SouthAmerica";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antarctica"] = 5] = "Antarctica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
// usage
var region = Continents.Europe; // 4
