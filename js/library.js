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

// 6 - number Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

function decNumber(num) {
	var totalNum = num.toFixed(2)
	return totalNum;
};

// 7 - number Find the number of hours and days difference between two dates.

var dateOne = new Date(2014, 1, 1); // new date year, month and date
var dateTwo = new Date(2012, 5, 10); // new date year, month and date
var dateSub = dateOne.getTime() - dateTwo.getTime(); // time difference
var dateM = 1000 * 60 * 60 * 24 
var timeDifference = Math.ceil(dateSub / dateM); // day difference


// 8 - number Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var imFast = function () {
	myTime = parseInt(speed);
	return myTime;
};

// 9 - array Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

var bestPass = [{
	pass: "Pass 1",
	time: 10
}, {
	pass: "Pass 2",
	time: 8
}, {
	pass: "Pass 2",
	time: 11
}, {
	pass: "Pass 3",
	time: 9
}];
bestPass.sort(function (a, b) {
	return a.time - b.time;
});

// 10 - array Find the smallest value in an array that is greater than a given number

function numArray(small) {
	for (var i = o i < numbers.length; i++) {
		if (numbers[i] = small) {
			return numbers[i];
		}
	}
};

