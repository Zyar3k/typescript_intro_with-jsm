console.log("Hello Typescript");
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
