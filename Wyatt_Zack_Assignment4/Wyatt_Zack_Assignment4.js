//alert("JavaScript works!");
//Zack Wyatt
//SDI 1207
//Project 4
// Libraries


var myLibrary = function(){//Library

//Does a string follow a 123-456-7890 pattern like a phone number?

var validatePhoneNum = function(number){  //Number Argument being passed for verification
var phoneNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/; // Regular Expression code used to verify phone # to return a boolean
    return phoneNumber.test(number);//Return Number
 };   

// Does a string follow a aaa@bbb.ccc pattern like an email?

var emailAddress = function (email){ //String Argument being passed for verification
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regular Expression code used to verify email address to return a true or false boolean
    if(emailPattern.test(email) === false) {
        console.log("Your email address is not valid. Please try again.");//Output if False
        return false;//Return Boolean
    }
    else{
        console.log("Your email address is valid."); //Output if True
	return true;//Return Boolean
                
    }
};
   
//Is the string a URL? (Does it start with http: or https:)

var validUrl = function (url){  //String Argument being passed for verification
var urlPattern =  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; //Regular Expression code used to verify url to return boolean
    if(urlPattern.test(url) === false) { //Conditional
        console.log("This url is invalid please try again!")
        return false;//Return Boolean
    }
    else{
	console.log("This is a vaild url."); //Ouput if true
        return true;//Return Boolean
    }

};


/*
Given a string that is a list of things separated by a given string,
as well as another string separator,
return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".
*/



//Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10
 var specNum = function(num){ //Number Argument
    	var number = num//Local Variable
    	var nums = number.toFixed(2);//Local Variable
    	return nums;//Return Number

 };

//Fuzzy-match a number: is the number above or below a number within a certain percent?




//Find the number of hours or days difference between two dates.




//Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var version = function(string){ //String Argument
    var answer = Number(string);//Local Variable
        console.log("The number I am returning is " + string);//Output
    return answer;//Return String
};

//Find the smallest value in an array that is greater than a given number



//Find the total value of just the numbers in an array, even if some of the items are not numbers.
var total = function(z, a, c, k, w){//Number and String Argument
    var array = [z, a, c, k, w];//Local Variable
    var sum = 22//Local Variable
    for (i=0; i < array.length; i++) {//For Loop
	if (typeof array[i] == 'number') {//Conditioal
	    total += array[i];	
	};
    };
	console.log("The sum of [" + array + "] is = " + sum);//Output
        return sum;//Return Number
};



//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].




//RETURN FUNCTION WRAPPER

return {
        "validatePhoneNum":validatePhoneNum, //Return #1
        "emailAddress":emailAddress,//Return #2
        "validUrl":validUrl,//Return #3
        "specNum":specNum,//Return #4
        "version":version,//Return #5
        "total": total//Return #6
            
    };
};


//Outputs
var newLib = new myLibrary();//Library Function

console.log(newLib.validatePhoneNum(2088709663));//Output #1 Phone # used to validate function and return true boolean
console.log(newLib.emailAddress("zackw22@fullsail.edu"));//Output #2 Email addressed used to validate
console.log(newLib.validUrl("http://fullsail.com"));//Output #3
console.log(newLib.specNum(2.1));//Output #4
console.log(newLib.version("42"));//Output #5
console.log(newLib.total(2, 4, 6, 8, 2));//Output #6



