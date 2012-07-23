//alert("JavaScript works!");
//Zack Wyatt
//SDI 1207
//Project 4
// Libraries


var myLibrary = function(){

//Does a string follow a 123-456-7890 pattern like a phone number?

var validatePhoneNum = function(number){  
var phoneNumPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
    return phoneNumPattern.test(number);

   };   

// Does a string follow a aaa@bbb.ccc pattern like an email?

var validateEmailAddress = function (email){ 
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    if(emailPattern.test(email) === false) {
	console.log("Your email address is not valid. Please try again."); 
	return false;
    }else{
	console.log("Your email address is valid."); 
	return true;
                
    }
};
   
//Is the string a URL? (Does it start with http: or https:)

var validUrl = function (url){  
var urlPattern =  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
    if(urlPattern.test(url) === false) { 
        console.log("This is a vaild url."); 
	return false;
    }else{
	console.log("This url is a correct."); 
	return true;
    }

};


/*
Given a string that is a list of things separated by a given string,
as well as another string separator,
return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".
*/


//Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10


//Fuzzy-match a number: is the number above or below a number within a certain percent?


//Find the number of hours or days difference between two dates.

//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

//Find the smallest value in an array that is greater than a given number

//Find the total value of just the numbers in an array, even if some of the items are not numbers.

//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].


//RETURN FUNCTION WRAPPER

return {
        "validatePhoneNum":validatePhoneNum, 
        "validateEmailAddress":validateEmailAddress,
        "validUrl":validUrl,
    };
};


//Outputs
var newLib = new myLibrary();

console.log(newLib.validatePhoneNum(2088709663));
console.log(newLib.validateEmailAddress("zackw22@fullsail.edu"));
console.log(newLib.validUrl("http://fullsail.com"));


