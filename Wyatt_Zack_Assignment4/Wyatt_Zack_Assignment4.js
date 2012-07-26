//alert("JavaScript works!");
//Zack Wyatt
//SDI 1207
//Project 4
// Libraries


var myLibrary = function(){

//Does a string follow a 123-456-7890 pattern like a phone number?

var validatePhoneNum = function(number){  
var phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; 
    return phoneNumber.test(number);

   };   

// Does a string follow a aaa@bbb.ccc pattern like an email?

var emailAddress = function (email){ 
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    if(emailPattern.test(email) === false) {
	return false;
    }
    else{
	return true;
                
    }
};
   
//Is the string a URL? (Does it start with http: or https:)

var validUrl = function (url){  
var urlPattern =  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
    if(urlPattern.test(url) === false) { 
        return false;
    }
    else{
	return true;
    }

};


/*
Given a string that is a list of things separated by a given string,
as well as another string separator,
return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".
*/



//Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10
 var specNum = function(num){ 
    	var number = num
    	var nums = number.toFixed(2);
    	return nums;

 };

//Fuzzy-match a number: is the number above or below a number within a certain percent?




//Find the number of hours or days difference between two dates.




//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var version = function(string){ 
    var answer = Number(string);
        console.log("The number I am returning is " + string);
    return answer;
};

//Find the smallest value in an array that is greater than a given number



//Find the total value of just the numbers in an array, even if some of the items are not numbers.
var total = function(z, a, c, k, w){
    var array = [z, a, c, k, w];
    var sum = 22
    for (i=0; i < array.length; i++) {
	if (typeof array[i] == 'number') {
	    total += array[i];	
	};
    };
	console.log("The sum of [" + array + "] is = " + sum);
        return sum;
};



//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].




//RETURN FUNCTION WRAPPER

return {
        "validatePhoneNum":validatePhoneNum, 
        "emailAddress":emailAddress,
        "validUrl":validUrl,
        "specNum":specNum,
        "version":version,
        "total": total
    };
};


//Outputs
var newLib = new myLibrary();

console.log(newLib.validatePhoneNum(2088709663));
console.log(newLib.emailAddress("zackw22@fullsail.edu"));
console.log("Your email address is not valid. Please try again.");
console.log("Your email address is valid."); 
console.log(newLib.validUrl("http://fullsail.com"));
console.log("This is a vaild url."); 
console.log(newLib.specNum(2.1));
console.log(newLib.version("42"));
console.log(newLib.total(2, 4, 6, 8, 2));



