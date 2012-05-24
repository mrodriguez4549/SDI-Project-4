/* 
Author: Marco Rodriguez
Date: 05-24-12
SDI - Project 4
Buliding my library...
*/

// library

// 1 - string that checks if a string is a phone number checks if the number follows the phone number pattern. Does a string follow a 123-456-7890 pattern like a phone number?


var checkPhone = function(validate) {
var checkNumbers = /^([0-9]{3})\-([0-9]{3})\-([0-9]{4})$/;
	if(checkNumbers.test(validate)){
		return true;
	} else {
		return false;
	}
};

// 2 - function that checks if email is valid and that it follows correct pattern to validate. Does a string follow an aaa@bbb.ccc pattern like an email address?

var checkEmail = function(validate) {
	var checkAddress = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(checkAddress.test(validate)){
			return true;
		} else {
			return false;
		}
};

// 3 - function Title-case a string (split into words, then uppercase the first letter of each word)
 
String.prototype.titleCase = function(){
	var myString = "", // empty string
		eachWord = this.split(" "); 
	for(characters in eachWord){ // character for each word
		myString += ' ' + eachWord[characters].substr(0,1).toUpperCase() + eachWord[characters].substr(1, eachWord[characters].length);
		// uppercase first letter of each word
	}
		return myString;
};

// 4 - function checks string url to make sure the url pattern is correct from the regular expression. Is the string a URL? (Does it start with http: or https:?)

function checkURL(checkIt) {
var urlCheck= /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if (checkIt.match(urlCheck)) {
			urlCorrect = "Way to go, your URL, " + checkIt + ", is correct!"
			return urlCorrect;
			} else {
				urlIncorrect = "You are too funny, " + myURL + ", doesn't follow correct URL pattern, try again.";
				return urlIncorrect;	
	}
};

// 5 - function given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".


function partsNeeded() {
	var parts = myParts.replace(/./g. slash); // forward slash di not work for me
	return parts;

};