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
		if(checkAddress.testvalidate)){
			return true;
		} else {
			return false;
		}
};