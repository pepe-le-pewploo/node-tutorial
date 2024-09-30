//Modules - Encapsulated Code (only share minimum)
//CommonJS, every file is module (by default)
//const names = require('./3-names');

const {peter, john} = require('./3-names');

const sayHi = require('./3-utils');

const data = require('./3-alternative-flavour');
const { findDifference } = require('./3-mind-grenade');
require('./3-mind-grenade');
//console.log(data);
//console.log(names);
//findDifference(); -> does not work, export


sayHi('Susan');
sayHi(peter);
sayHi(john); // alternative of destructuring = names.john, names.peter