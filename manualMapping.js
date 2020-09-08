const expect = require('chai').expect;
const evaluate = require('./evaluate');
//const expect = require('chai').expect;
//const tests = require('./tests');
//const  GetColorFromPairNumber  = require('./evaluate');
function toString(){
    var manualMapping =new Map();
    let temporaryPairNumber;
    for(temporaryPairNumber=1;temporaryPairNumber<26;temporaryPairNumber++){
        let temporaryColorPair=evaluate.GetColorFromPairNumber(temporaryPairNumber);
        manualMapping.set(temporaryPairNumber,temporaryColorPair);

    }
    console.log(manualMapping);
    //return manualMapping;
}
//var temp=toString();
//console.log(temp);
