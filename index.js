var evaluate = require('./evaluate');
var tests=require('./evaluate');
console.log("color coder");
tests.testNumberToPair(4, "white", "brown");
tests.testNumberToPair(25, "violet", "slate");
tests.testColorToNumber("black", "brown", 14);
tests.testColorToNumber("yellow", "green", 18);
