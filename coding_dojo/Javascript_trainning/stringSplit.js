var myAssocArr = {};
myAssocArr.IQ = 116;
myAssocArr["fun"] = "Martin honks on a tenor saxophone";
console.log(myAssocArr);
console.log(typeof myAssocArr.fun); // "string"
var myChar = myAssocArr.fun[26]; 
console.log(myChar);// "x"
console.log(typeof myChar); // "string"