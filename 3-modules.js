// CommonJS, every file is module (by default)
//  Modules - Encapsulated Code (only share minimum)

const sayHi=require("./5-utils")
const names=require("./4-names") //or {john,harry}
const data = require("./6-alternative-code")
require("./7-mind-grenade")
console.log(data)
sayHi("suman");
sayHi(names.harry);
sayHi(names.john);
