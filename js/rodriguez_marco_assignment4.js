/* 
Author: Marco Rodriguez
Date: 05-24-12
SDI - Project 4
Buliding my library...
*/

// testing

// 1 - string that checks if a string follows pattern

console.log(checkPhone("214-334-4578")); // follows number pattern
console.log(checkPhone("972-228-789S")); // false 
console.log(checkPhone("972-228-7899")); // follows number pattern


console.log(" ");

// 2 - function that checks if email
 
console.log(checkEmail("mdz99@email.com")); // true, it follows email pattern
console.log(checkEmail("mrodz@email.com")); // true, it follows email pattern
console.log(checkEmail("yo_____--@com")); // false, does not follow the email pattern

console.log(" ");

// 3 - function Title-case a string

var titleWord = "full sail university"; // captialize the first letter of each word 
titleWord = titleWord.titleCase();
console.log(titleWord);

// 4 - function checks string url

var validURL = checkURL("http://google.com"); // outputs calid email pattern
console.log(validURL);

// 5 - function given a string that is a list

var myParts = "control arms, heads, cam, bolt ons, headers, duals, torque converter";
console.log("These are the parts I am needing: " + partsNeeded()); // array of parts output