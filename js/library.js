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