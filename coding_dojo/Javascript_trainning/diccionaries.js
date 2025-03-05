// Given two arrays, create an associative array (map) containing keys of the first, and values of the
// second

let array1 = ["abc", 3, "yo"];
let array2 = [42, "wassup", true];
array3 = {};


for (let i = 0; i < array1.length; i++) {
    array3[array1[i]] = array2[i];
}

console.log(array3);

// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys.
// Example: given {"name": "Zaphod"; "numHeads": 2}, return {"Zaphod": "name"; 2:
// "numHeads"}. You will need to learn and use a JavaScript for ... in here!

let array4 = {"name": "Zaphod", "numHeads": 2};
array5 = {};

for (let key in array4) {
    array5[array4[key]] = key;
}

console.log(array5);

// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but
// with characters reversed. Example: given "creature", return "erutaerc". Do not use the built-in
// reverse() function!



function reverseString(str) {
    let reversed = "";
    let j = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[j]);
        reversed += str[i];
        j += 1;
    }
    return reversed;
}

array6 = "creature";
console.log(reverseString(array6));

