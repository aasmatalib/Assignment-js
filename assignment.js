/*=====================================================================
Chapter 1 
===================================================================
1.
Question 1 : Alert these following (individually): 
I.	First Name
II.	Last Name
III.	Email
IV.	Phone Number
V.	Password 

==========
Solution
==========
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");*/

/* Question 2.	Correct this statement: alert"You're learning JavaScript!";

==========
Solution
========== 
alert("You're learning JavaScript!");*/

/* Question 3.	Code an alert statement displaying any message you like. 

alert("JS Assignments");*/

/* ================================================
Chapter 2 (Variables for string)
==================================================

Question 1 : Declare any variable in the camelCase format.
    Solution : 
    var myName; 

Question 2 : Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
    var myName;
    myName = " Asma ";*/

    /*3.	Declare the variable teamName and Alert your Team name.
    var teamName = "My Team";
alert(teamName);*/

/*4.	This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Alpha";
alert(bestMan);*/

/*=====================================================================
Chapter 3
===================================================================

/* 1.	Declare a variable “caseQty”

var caseQty;*/

/* 2.	Assign to the variable caseQty, which has already been declared, the value 144.*/

/*3.	Rewrite this statement so the variable can be used in a math operation. var num = "9"; 
var num = 9 ;
alert(num);
console.log(num);*/

/* 4.	In one statement declare a variable. In a second statement assign it the sum of 2 numbers. 
var sum;
sum = 1+2 ;
alert(sum); */


/*5.	What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
Try it yourself. 
Answer: 
110 */

/*6.	In the first statement declare a variable and assign it a number. 
In the second statement, change the value of the variable by adding it together with a number.

var a = 12;
a = a + 1;*/

/*=============================================
Chapter 4 (Variable names Legal and Illegal)
============================================
1.	Correct this statement.
var product_cost = 3.45 ;
alert(product_cost);*/

/*2.	Rewrite this using camelCase.
var Nameofband;

Answer : var nameOfband;*/

/* 3.	In a single statement declare a legally-named variable and assign a number to it. 
var sumOfnumber = 12;*/

/* 4.	Declare a variable that is a combination of your first and last names. Use camelCase.
var asmaTalib ;*/

/*5.	List the legal and Illegal Variables.*/

/*============================
Chapter 5 (Math Expression I)
============================== */

/*1.	What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
 % modulus */

 /*2.	What is the value of num?
var num = 20 % 6; 

Answer : 2 */

/* 3.	In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000. 
let largeNum = BigInt(1000) * BigInt(2000);
*/

/*4.	Assign to a variable the value represented by one variable subtracted from the value represented by another variable 
var a = 20 ;
var b = 12;
var c = a - b;
*/

/*5.	Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.

var a = 12%7;
*/
/* 6.	Code an alert that displays the result of a multiplication on 2 numbers. 

a = alert(3*4);
console.log(a);
*/

/* Chapter 6 (Math Expression II)*/

/* 1.	Code a short form of x = x + 1; Use either of the two legal expressions.
x++; */

/*2.	If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
--x ;
*/

/* 3.	var x = 50;
var y = x++;
What is the value of y?

Answer : 50 
*/

/* 4.	var y = 50;
var z = --y;
What is the value of z?

Answer : 49

*/

/*5.	In a single statement, decrement num and assign its original value to newNum.

var newNum = -- num ; */

/* 6.	In a single statement add 1 to a variable and assign its original value to another variable
 b = ++a; */

 /*Assign a number value to a variable. 
Increment the variable.
Display the new value in an alert


var a= 10 ;
++a;
alert(a);*/

/*Chapter 7 (Math Expression III)*/

/* 1.	var calculatedNum = 2 + (2 * 6);
What is the value of calculatedNum? 

Answer 14 */

/* 2.	var calculatedNum = (2 + 2) * 6;
What is the value of calculatedNum?

24
3.	var calculatedNum = (2 + 2) * (4 + 2);
What is the value of calculatedNum?
24
4.	var calculatedNum = ((2 + 2) * 4) + 2;
What is the value of calculatedNum?
18
*/

/* 5.	Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

  var cost  =   (2 + 2 ) * (4 + 10) */


/* .	Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.

    var units =   2 + (2  * 4 + 10) ;

*/

/*
7.	Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing .5
the result will be .5 not 5
var pressure  =   4 /( 2 * 4 );*/



/* Chapter 8 (Concatenating Text Strings)*/

/* 1.	var num = "2" + "2";
What is the value of num? Include quotation marks.

22
*/
/*2.	message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.)
Alert the statement

message = ("Hello," + "Dolly");
alert(message);
Answer : Hello,Dolly
*/

/*
3.	alert("33" + 3);
What message displays in the alert box?
*/

333
*/

/*
4.	Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
*/
/* 5.	Write a statement that assigns to a variable the concatenation of a string with a number
var fbid = "name"+123 ; 
alert(fbid);*/

/* 6.	Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var fName = " Asma";
var lName = "Talib";
var fullName = fName + lName;
alert(fullName); */

/*

/*==========================================================
Chapter 9 (Prompts)
===========================================================
*/

/* 1.	Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var firstName = prompt("Enter your name");
alert("Welcome " + "" + firstName); */

/* 2.	Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country  = prompt("country", "China");

alert(country); 

/*
3.	Correct this statement
var yourName = prompt(Enter Your Name");

Answer: 
var yourName = prompt("Enter Your Name");
console.log(yourName);*/

/* 4.	Code a prompt that specifies a string as the message Include a default input. 
var name = "Asma" ;
var message = prompt("Welcome" + name );
console.log(message);*/

/*
5.	Assign strings to two variables. Code a prompt specifying the first variable as the message 
and the second variable as the default response. Assign the user's response to a third variable.
var greetings = "Hello";
var named = "John";
var response  = prompt(greetings + "Please Enter your Name " + named );
console.log(response); */

/*6.	Display a prompt, including both a message and a default response.
Display the user's response in an alert.


var input = prompt("Your Name ", "NickName ");
alert("Hi" +  input);
*/

/*Chapter 10 (if statments) */

/* var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
Correct the above statement:
Also try this statement by yourself 
 Answer :
 var city = "Karachi";
 if (city === "Karachi") {
 console.log("The City OF Lights");}
 */

 /*if (x === y) {
Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

var x;
var y;
var z;
if (x === y) {
    
    var  answer = prompt("what's value for z");
 console.log(answer);
} 
*/

/*3.	Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

var zipcode = prompt("enter zipcode ?");
if(zipcode == '10010'){
alert("Karachi");

}
else 
{alert("Please enter correct city");}
*/

/* 4.	Code an if statement. Test whether a variable has a particular numerical value. 
If so, assign a new value to that variable, as in x = 1; 

var x = 10 ;
if(x === 10 ){
    x = ++x;
}
console.log(x);
*/

/* Chapter 11 (Comparison Operators)*/

/* 1 . Code the first line of an if statement that tests whether one variable is unequal to another. (Use !) 
 Answer : if(x !==y){

    */

/* 2.	Code the first line of an if statement that tests whether the value represented
 by a variable is greater than or equal to the value represented by another variable.*/


/*3.	Code an if statement. Test whether a variable is unequal to a particular number. 
If so, assign a number to that variable.

var a;
var a = prompt("Enter a number");
if(a!==10){
a = 10 ;
console.log(a);
} */

/*4.	Code an if statement that tests whether a number is unequal to a different number. If the condition is true
 (it will be), display a congratulations alert.

 var a = prompt("enter first number");
 var b = prompt("enter second number");
  if(a!==b){
 alert("congradulations");
 
  } */

  /*5.	Code a prompt asking for your first name.
Code an if statement that tests whether the name you entered is unequal to another name.
If the condition is true (it will be), display an alert that says "No match"

var username = prompt("Enter username");
if(username !== "admin"){
alert("No match ");

} */

/*Chapter 12 (if…else and else if statements)*/
/*1.	Code an if statement that tests whether the value represented 
by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
var a = prompt("enter first number");
 var b = prompt("enter second number");
  if(a!==b){
 alert("congradulations");
 
  }else 
  alert("Enter roll number ");
  */

/*2.	Write a program using if else and else if statement which take marks from user. 
 the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)

 var marks = prompt("ENter your Marks");
 if(marks >= 80 && marks <=100) 
 {
    alert("A Grade");
 }else if (marks >= 70 && marks <= 80)
 {
    alert("B Grade");
 }else if (marks >= 60 && marks <= 70)
 {
    alert("C Grade");
 } */

/*3.	This is the if statement that begins the code.
if (a === 10) {
  alert("a is 10");
}
If a isn't 10, display an alert that says The correct value of a is 
var a = parseInt(prompt("Enter value for a"));
if (a === 10) {
    alert("a is 10");
  }else alert("The correct value of a is ___________"); */

  /*4.	Prompt the user to enter a city.
If the city is Karachi, display an alert acknowledging it is Karachi.
If not, check to see if it's Lahore.
If it is, display an alert acknowledging it's Lahore.
Otherwise, display a different alert.

var city = prompt("enter your city ");
var input = city.toUpperCase();
if(input === "KARACHI"){
alert("Your city is Karachi");

}else if(input === "LAHORE"){

    alert("your city is Lahore");

}
else
{
    alert("whats your city then ?");
}
*/

/*Chapter 13 (Testing sets of conditions)

1.	Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.
if(a===b && c===d)
*/
/*2.	Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.*/

/*3.	Code the first line of an if statement that tests whether 
I.	name is either "Hamza" or "Arsalan".
II.	age is Less than 60.
if((Name === "Hamza" || Name === "Arsalan") && (age <= 60)){
    */
   /*4.	Declare two variables and assign them number values.
If the first variable is less than the second variable or greater than the second variable, display an alert.

var a = prompt("Enter first number ");
var b = prompt("Enter second number");

if((a < b) || (a > b)){
    alert("Not equal numbers");}

else {alert("You enetered Equal Numbers")};
*/
/*5.	Declare 2 variables. Assign one of them your first name and the other one your last name.
Code 2 prompts, asking for your first and your last name.
If your answers match the two variables, display an alert.
var fName = prompt("ENter your firts name");
var lName = prompt("ENter you last name");

if(fName === "asma") && (lName === "talib"){
    alert("you entered your name");
}
*/


/*===================================
Chapter 14 (If statements nested)
=====================================*/

/*1.	Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5  
, then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".


var input = prompt("Enter password");
var len = input.length; // Use .length to get the length of a string
console.log(len);

if (len !== null) { // Corrected the condition
    if (len >= 5) { // Corrected the condition and added a missing closing brace
        // Your code for a password length of at least 5 characters goes here
    } else {
        console.log("Password must be at least 5 characters long.");
    }
} else {
    console.log("You didn't enter a password.");
}
} */

/*2.	Try this statement by yourself
if (a === 1) {
 if (c === "Max") {
    alert("OK");
  }
}

a and c are not defined output -> variable undefined */

/*3.	Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1) {
  if (c === "Max") {
 alert("OK");
  }
}*/

/*4.	Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the first variable
 equals the second variable and also whether it is less than or equal to the second variable.
  If the test passes—and it will—display an alert message.


var a = 10 ;
var b = 12;
if((a<b) || (a>b)){
alert("not equal");

}else {
    alert("Equal");}*/

   /*==================================
    Chapter 15 (Array I)
    ===================================
    */

    /* 1.	Declare an empty array.
    var names =[]'
    */
/*2.	Code an array with 1 string element
var names = ['asma'];

*/
/*3.	var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index 
var alphabet = ["h","i","j","k"];
alert("alphabet[2]");*/

/*4.	var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
var alphabet = ["h","i","j","k" , "h","i","j","k"];
var len = alphabet.length;
alert(len); */

/*5.	Declare an array with one element and Add a second element with index in array.
Create an alert whose message is the new element.
var fName = ['asma'];
fName.push('myname');
var index = fName.indexOf(fName[1]);
alert(index);

*/
/*Chapter 16 (Array II)*/
/*
1.	Code an array with 1 string element.
Add an additional element to the array using push.
Create an alert whose message is the last element.

var fName = ['asma'];
fName.push('myname');
var index = fName.indexOf(fName[1]);
alert(fName[index +1]);
*/
/* 2.	var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.

var Alphabet = ["h","i","j","k"];
var text = Alphabet.pop();*/

/*3.	var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.

var Alphabet=["h","i","j","k"];
Alphabet.push("l");
console.log(Alphabet);
*/

/*3.	var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.
Chapter 16 (Array III)
*/
/* 1.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Remove the first element of an array.
var myArray = [1, 2, 3, 4, 5]; 
myArray.shift(); 
console.log(myArray); 
*/

/*2.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Add three number elements to the beginning of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1,2,3);
console.log(sizes);
*/

/* 3.	Declare an array with one element.
Add a second element to the beginning of the array.
Create an alert whose message is the new first element.
var arr= [1];
arr.unshift("2");
alert(arr[0]);*/

/*

4.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,0, "L");
console.log(sizes);

*/

/*5.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array, regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var newSizes = sizes.splice(3,0);
console.log(newSizes);*/

/*6.	var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"];

pets.splice(1,2);
pets.splice(1,0,"monkey" , "donkey" , "bear");
console.log(pets);
*/
/* 7.	var pets = ["dog", "cat", "ox", "duck", "frog"];
Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2);
console.log(pets);
*/
/*8.	var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]
pets.splice(0,3);
console.log(pets);*/

/*Chapter 17 - 20 (for Loops)*/

/* 1.	Write a statement in which loop is to run 10 times. 
var a;
for(a=0 ;a< 10 ;a++) {
    console.log("print no" + (a+1) );
}*/
/*2.	Code the first line of a for loop with the usual counter name, usual starting value,
 and usual increment. Run it 12 times using <= to specify how many loops.

 for(var  i =0 ; i< 13 ; i++){
    console.log("print no" + (i) );

}
*/
/* 3.	What are the 5 characters missing from this code, excluding any spaces that are missing? 
Type them in order, with no spaces or commas between them.
for( var i = 0 ; i <= 4 ; i++)*/
/*4.	Code the first line of a for loop with a counter name that's not i.
Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

for(var a = 0 ; a<100 ; a++){

    console.log("print no" + (a+1) );*/

}

/*5.	Code the first line of a for loop with the usual counter and the usual starting value. 
Run it 3 times using > to specify how many loops. Decrement it with each iteration.
for(var i = 3 ; i>0 ; i--){

    console.log("print no" + i );

}*/

/*6.	The statement assigns the number of elements in the array to the variable
var arr = [1,2,3,4,5,6,7];
var b = arr.length;
console.log(b); */
/* 7.	Set a variable named “flag” with an initial Boolean value of your choice.

var flag = true;*/

/*8.	Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing.
 Limit the number of loops by the number of elements in the array pets.

 var pets = [ "cat", "dog" , "monkey", "bear", "panda"];
 var len = pets.length;
 for(var a =0 ;a<len; a++){
    console.log(pets[a]);*/

    /*9.	Coding Exercise:
Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should be 1.)
Break out of the loop.
for(var a = 0 ; a< 11 ;a++){
    console.log(a);
    
if(a == 1) break;
}
*/

/*10.	Create an array which contains user names
Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by 
the number of elements in the array user names.
Code an if statement that tests the presense of (user name) in an array.

var firstName = prompt( "Enter first name");
console.log(firstName);
let len = firstName.length;
console.log(len);

var userName = ["tom" , "jerry" , "bear" , "panda" , "monkey"];
var fName = prompt("Enter first name");

for(var i = 0 ; i< userName.length ; i++){
if(fName === userName[i]){
alert("Welcome " + userName[i]);
}
*/

/*11.	Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
};


var userInput = +prompt("Enter a number");
var list = [1, 2, 3, 4];
var matchFound = false; // Initialize matchFound outside the loop

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    matchFound = true;
    break; // Exit the loop if a match is found
  }
}

if (matchFound) {
  alert("Match found");
} else {
  alert("No match found");
}*/

/*12.	var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.
After that concatenate the both loops.

Expected Output:
a1
a2
a3
a4
…
f6

var firstArr = [ "a", "b", "c", "d", "e", "f"];

var secondArr = [1, 2, 3, 4, 5, 6];
for(var i = 0 ;i< firstArr.length ; i++){
for(var j  = 0 ; j < secondArr.length  ; j++){

console.log(firstArr[i] + secondArr[j]);
}

}
*/
/*==========================================
Chapter 21 (Changing Case)
============================================ */
/*
1.	Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself

var userInput = prompt(userInput);
var allLower = userInput.toLowerCase();
console.log(allLower);.*/

/*
2.	Convert the string represented by x to lower-case and assign the result to the same variable.
var str = "X";
var str = str.toLowerCase();
console.log(str);
*/
/*3.	Convert the string represented by y to upper-case and assign the result to the same variable.
var str = "y";
var str = str.toUpperCase();
console.log(str);
*/
/*4.	Convert the string represented by a variable to lower-case and assign
 the result to a second variable that hasn't been declared beforehand.

 var str = "Name";
 var cvrt = str.toLowerCase();
 console.log(cvrt);*/
 /*5.	Convert the string represented by an array element to lower-case and 
 assign it to a variable that hasn't been declared beforehand.
 var userName  = [ "TEXT" ] ;
var userNameCvrt = userName[0].toLowerCase();
console.log(userNameCvrt);*/

/*6.	Display in an alert the upper-case version of the string represented by a variable.
var userName = "asma";
var userNameUpper = userName.toUpperCase();
alert(userNameUpper);*/

/*7.	var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word
 with its first letter in uppercase and the remaining letters in lowercase.

var cityName = "kaRacHi";
var cityNameUpper = cityName.toUpperCase();
alert(cityNameUpper);*/

/*==================================
Chapter 22 - 25 (Strings)
===================================*/
/* 1.	"captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

samewords = "captain";
var smword = samewords.slice(1,3 );
console.log(smword);
*/

/*2.	The number of characters in the string will be assigned to the variable.
var text = "username";
var len = text.length;
console.log(len);*/

/*3.	The string "elephant" has been assigned to the variable animal. Slice the four middle characters 
out of the string and assign it to the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
var seg = animal.slice(2,6);
console.log(seg);*/

/*4.	Find the number of characters in the string represented by a variable and assign the number to a second variable.
var str  ="Text";
var len = str.length;
console.log(len);*/
/*5.	In a first statement measure how many characters there are in a string represented by a variable. 
In a second statement slice all but the first character and last 3 characters
 of the string and assign it to a second variable that hasn't been declared beforehand.

 var str1 ="username";
 var len = str1.length;
console.log(len);
 var str2 = str1.slice(1 , 5) ;
 console.log(str2);*/

 /*6.	var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx?

3
*/

/*7.	var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
16
*/

/*8.	Find the index of the first character of the last instance of "go" in the string represented by
 the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
the string text is missing

var text = "Your text goes here. This is where we find the last 'go'.";
var str = "go";
var indx = text.lastIndexOf(str);
console.log(indx);
*/

/*9.	Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
if (typeof str[indexNum] !== 'undefined') {
    
  }
  */

  /*10.	In this string "abcde", what character is at index 2? (Use charAt

var str  = "abcde";
var chr = str.charAt(2);
console.log(chr);)*/

/*11.	Find the 10th character in the string represented by text and assign it to 
the variable cha, which hasn't been declared beforehand.
var text = "This is myName ";
var cha =  text.charAt(10);
console.log(cha);*/

/*12.	Find the last character in the string represented by str and assign it to x, 
which hasn't been declared beforehand.

var str = "this is my name";
var len = str.length;
var x = str.charAt(len-1);
console.log(x);
*/

/*.	Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.

var text = "This is myName ";
var cha =  text.charAt(5);
console.log(cha);
*/
/*
14.	Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.

var text = "This is myName ";
var cha= text.charAt(3)
if(cha == 's'){


console.log(cha);
}
/*
15.	Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an
 array that has been declared beforehand.*/
 /*
 var text = " Hello , how are you ?";
 var txt = [];
 var len = text.length;
 
 for (var i = 0; i < len; i++) {
   var str = text.charAt(i);
   txt.push(str); // Push the character, not the index
 }
 
 console.log(txt);
 

In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, 
which hasn't been declared beforehand.*/

/*
var text = "no , this me";
var text = text.replace("no" , "yes");
console.log(text);

/*
16.	In a string represented by str replace the first instance of "1" with "one" and 
assign the revised string to newStr, which hasn't been declared beforehand.

var str = "point no 1";
var newStr = str.replace(1, one);
console.log(newStr);
var str = "point no 1";
var newStr = str.replace(1, "one");
console.log(newStr);
*/
/*17.	If you want all instances replaced, enter 3 characters that need to appear in this statement.
var y = x.replace("a", "z");

var y = x.replace("/a /g", "z");*/

/* ===============================
Chapter 26 (Rounding Numbers)
================================*/

/* 1.	Form a statement that rounds a number to the nearest integer.

var a =1.2;
var rd = Math.round(a);
console.log(rd); */
/*2.	Round up a number represented by origNum and assign it to roundNum,
 which hasn't been declared beforehand.
 var origNum= 1.2;
 var roundNum = Math.round(origNum);
 console.log(roundNum);*/
 /*3.	Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
 4.	Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
 var origNum= 1.2;
 var roundNum = Math.round(origNum);
 console.log(roundNum);

*/
/* 5.	Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.

var a = .0 ;
var b =  Math.round(a);
console.log(b);*/

/* ================================
Chapter 27 (Random Numbers)
==================================*/
/* 1.	Convert a random number generated by JavaScript to a number in the range 1 to 50 
var num = Math.random();
var numrandome = (50*num)+1;
var round = Math.round(numrandome);
console.log(round);
console.log(numrandome);*/
/*2.	Generate a random number and assign it to a variable that hasn't been declared beforehand.
var num = Math.random();
*/
/*3.	You have to create a dice in JavaScript with the use of pseudo-random number.
var num = Math.random();
var numrandome = Math.floor(6*num)+1;
var round = Math.round(numrandome);
console.log(round);
*/
/*
4.	You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number. 
var num = Math.random();
var numrandome = Math.floor(2*num)+1;
console.log(numrandome);
var round = Math.round(numrandome);
console.log(round);
if(round <=1 ) {alert("head");}
else {alert("Tail");}
*/

/*=======================================
Chapter 28, 29 (Converting Strings)
========================================*/
/* 1.	How do you convert a string to an integer in JavaScript?
var ans = prompt("Enter your age");
console.log(typeof(ans));
var num = parseInt(ans);
console.log(typeof(num));
*/
/*2.	Write a JavaScript function to convert the string "123" to an integer.
var string = "123";
var num = parseInt(ans);
*/
/*3.	How can you convert a string containing a decimal number to a floating-point number in JavaScript?
parseFloat();
*/
/*4.	How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

using typeof function 
*/
/*5.	How can you convert a number to a string in JavaScript?
var intstr = "24";
console.log(typeof(intstr));
var  num = Number(intstr);
console.log(typeof(num));
*/

/*6.	Write a JavaScript function to convert the number 42 to a string.

var intstr = 42;
console.log(typeof(intstr));
var  num = intstr.toString();
console.log(typeof(num));
*/
/*
7.	Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?


var integerString = "3.14";
console.log(typeof(integerString));
var num = Number(integerString);
console.log(typeof(num));
*/
/*====================================================
Chapter 30 (Controlling the length of decimals)
====================================================== */

/* 1.	Code a statement that rounds a number represented by num to 4 places, 
converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.

var num = 12.3456734242343423;
num = num.toFixed(4);
var newNum = num.toString();
console.log(newNum);*/

/*2.	In a single statement round a number represented by a variable to 2 places, 
convert it to a string, convert it back to a number, and assign it to the same variable.

var num = ((12.3456734242343423).toFixed(2)).toString();
*/

/*3.	Code the first line of an if statement that tests whether 
the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

if((num.toFixed(2)).toString().length > 4 )
*/
/*4.	Assign a number with many decimal places to a variable.
Code an alert that displays the number rounded to 2 decimal places and converted to a string.


var num = 12.232323112545;
var str =num.toFixed(2).toString();
alert(str);
alert(typeof(str));
*/


/*=====================================================================
Chapter 31 - 34 (Date & Time)
=======================================================================*/
/*
1.	Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.

var rightNowdObj = new Date();
*/
/*2.	Code a statement that creates a new Date object, converts it to a string,
 and assigns the string to dStr, which hasn't been declared beforehand.
 var dStr = new Date().toString();*/

 /*3.	Code a statement that extracts the day of the week from a Date object represented 
 by d and assigns it to day, which hasn't been declared beforehand.
var d = new Date();
var day = d.getDay();*/
/*4.	The day has been extracted from the Date object and assigned to d. The names of the days
 of the week have been assigned to the array dayNames. Alert the current day with array index.

 var week = ["mon","tue", "wed","Thur","Fri","sat", "sun"];
var rightNow = new Date();
var theDay = rightNow.getDay();
alert("Today is " + week[theDay-1]);*/
/*
/*5.	Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var d = new Date();
var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var currYr = d.getFullYear();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds()
*/
/*6.	Code a statement that creates a Date object for the last day of the last
 month of 2020 and assigns it to later, which hasn't been declared beforehand.
 var lastDay = new Date("DEC 31,2020");
*/

/*7.	Create a Date object for the second day of the second month of 1992 and assign
 it to a variable that hasn't been declared beforehand.

 var lastDay = new Date("FEB 02,1992");*/

 /*8.	Code a single statement that displays in an alert the milliseconds 
 that elapsed between the reference date and the beginning of 1980.
 var diff = (new Date("June 30, 2035").getTime()) - (new Date("Jan 01, 1980").getTime());
 console.log(diff);
 */
/*9.	How do you change the year of a date in JavaScript?

var dt = new Date();
dt.setFullYear(2024);*/
/*

/*10.	Write a JavaScript function to change the month of a given date to January.
var dt = new Date();
dt.setMonth(1);
/*11.	What is the method to change the day of the week for a specific date in JavaScript?
var dt = new Date();
dt.setDate(1);*/
/*12.	Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

var min = prompt("ENter your minutes");
min = parseInt(min);
var dt =new Date();
dt.setMinutes(min);

var gt = dt.getMinutes();
console.log("time is " + gt);
*/
/*13.	Write a JavaScript function to add a specific number of hours to a given time.

var hours = prompt("ENter your hours");
hours = parseInt(hours);
var dt =new Date();
dt.setHours(dt.getHours() +hours);

var gt = dt.getHours();
console.log("time is " + gt);

*/
/*14.	You have to create a age calculator in JavaScript.

var age = prompt("what is your date of birth in yyyy-mm-dd");
var dt= new Date();
var dob= new Date(age);

var agmsc = dt - dob;
var age_in_years = (agmsc/(365.25 * 24 * 60 * 60 * 1000));
age_in_years = Math.floor(age_in_years);
 console.log(age_in_years);*/

 /*========================================
 Chapter 35 - 37 (Functions)
 ==========================================*/

 /*1 .	Code the first line of a function displayAlert.
 function displayAlert(){ alert("This is function alert");} displayAlert();*/

 /*2.	Code a function named askName that prompts the user to "Enter name"
  and assigns the answer to userName, which hasn't been declared beforehand.
  function askName(){

    let userName = prompt("enter your name");
   alert("wellcome " + userName);
     } askName();
     */

     /*3.	Code a function that calls 2 other functions.
     function username()
     {return prompt("Enter yourname ");}

     function greetings()
     {return prompt("ENter greetings");}

function webuser(){
   var usernames = username(); 
    var greet = greetings();
console.log(   greet + " " + usernames );
}
 webuser();

*/

/*4.	Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

function names(){

    var nm =  prompt("Enter name");
    alert(nm);
  }names();
*/

/*5.	Code the first line of a function named concat that has 3 parameters,
 the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
 function concat(vr , str, num){

    alert(vr + str + num );
    
     }
     var vr = "myName";
     concat(vr, "Hello" , 3);
     */

/*6.	Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.

concat (var1, var2){
    var sum = var1 + var2;
    
    console.log(sum);
    }concat(10,23);
/*


/*7.	Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function volume (length, breadth , height){

    var vol = length*breadth*height;
    alert("The vol of aphere is " + " " + vol);
    } volume( 10, 20 ,23);
*/

/*8. 10	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

arr = [1, 3, 4];
var sum = 0;

for (let i = 0; i < arr.length; ++i) {
  sum += arr[i];
  console.log("Partial sum after adding " + arr[i] + " is " + sum);
}

console.log("Total sum is " + sum);*/

/*9.	Write a JavaScript function that takes two parameters and returns their sum.
function sum(v1, v2) {
    return v1 + v2;
  }
  
  let num = sum(10, 12); 
  console.log(num);
  
*/

/*11.	You have to capture the returned value from a function and store it in a variable? 

function answer(){

  return prompt("whats your name?");
   }
  var answ;
  answ = answer();
  console.log(answ);
  */

  /*12.	Write a function which tells letter counts of (word).

  function counts() {
    let message = prompt("Enter your word");
    let len = message.length;
    let spaceCount = 0; 
  
    for (var i = 0; i < len; ++i) {
      if (message.charAt(i) === " ") {
        spaceCount++; 
      }
    }
  
    return spaceCount; 
  }
  
  let letters = counts();
  console.log("Number of spaces: " + letters);
  */

/*
/*13.	Write a function to set (year) in date object.

function year(){

  let dt = new Date();
   dt.setFullYear(2024);
  return dt;
  } var dt = year();
  console.log(dt);
  */
 /*14.	Write a function which tells the age of a person who Born on (dateOfBirth)


 function age(){

  var dob = prompt("enter your DOB as YYYY-MM_DD");
  var brth = new Date(dob);
  var now = new Date();
  let milliseconds =  now - brth ;
  diff =milliseconds / (1000 * 60 * 60 * 24 * 365.25)
  let agenow = Math.floor(diff);
  return agenow;
  } var prnt = age();
  console.log(prnt);
  */


  /*15.	Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false

var arr = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
var usr = prompt("enter username");
function str(usr){
for(var i = 0 ; i< arr.length ; i++){
if(arr[i] === usr)
return true;}
return false; 
}

var exists = str(usr);

if (exists) {
  alert("User exists");
} else {
  alert("User does not exist");
}*/
/*16.	Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10)*/
/*17.	write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse()

function customReverse(arr) {
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

var arr = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = customReverse(arr);
console.log(reversedArray);*/

/*Chapter 38 (Local vs. Global Variables)
1.	Write a JavaScript function that demonstrates the usage of a local variable.
function add(){
var sum = 2+4;

}*/

/*2.	How can you access a global variable inside a function in JavaScript?

by its name */

/*Chapter 39, 40 (Switch Statements)
1.	Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

var op = prompt("enter operator");
var a = prompt("enter first numer");
a = parseInt(a);
var b = prompt("enter second number");
b = parseInt(b);
switch(op)
{
case '+':
a + b ;
alert(a+b);
 break;

case '*':
    a*b;
    alert(a*b);
    break;
case '-':
a - b ;
alert(a-b);
 break;

case '/':
    a/b;
    alert(a/b);
    break;
}*/

/*2.	Write a JavaScript switch statement that check whether cityName given by user check the cityName
 if match alert the user and break the statement, if not default message will be shown to user.


var city = prompt("Enter city");


switch(city)
{
case 'karachi':
alert("you typed karachi");
 break;

 case 'lahore':
  alert("you typed lahore");
   break;

case 'islamabad':
alert("you typed islamabad");
 break;

 default:
  alert("city");
}
*/





/*Chapter 41, 42 (while loops, do…while loops)
(All Questions must be done with both loops)
1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.
var i=0;
while(i<2){
i++;
}

do{ var i=0;
i++;
}while(i<2)*/

/*
2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter.
 Break out of the loop when it's found.
 =======================
 do while
 ======================
var animals=["horse", "ox", "cow", "pig", "duck"];
var i=0;
do{
if(animals[i]=='pig'){
    alert("found it!");
    console.log(i);
    break;
}i++;

}while(i<=animals.length-1)

=======================
While loop
======================
var animals=["horse", "ox", "cow", "pig", "duck"];
var i=0;
while(i<animals.length){
if(animals[i]=='pig'){
    alert("found it!");
    console.log(i);
    break;}
i++;
}*/
/*3.	Code to use a while & do while loop to print the numbers from 1 to 10.
=======================
while loop
======================-
var i =0 ;
while(i<11){
document.write(i +'\n');

i++;

}*/

/*=======================
do while loop
======================-

var i =0 ;
do{
document.write(i +'\n');

i++;
}while(i<11)*/

/*
4.	To use a while loop to ask the user for a number and then print that number back to them.
var i=0;
var input;
while(true){

input = prompt("enter a number");
alert(input);
break;
i++;
}*/


/*5.	To use a while loop to check if a number is even or odd.

var i = 0;
var input;

while (true) {
  input = prompt("Enter a number");

  // Convert the input to a number
  var number = Number(input);

  if (!isNaN(number)) {
    if (number % 2 === 0) {
      alert("Even number");
    } else {
      alert("Odd number");
    }
    break; // Exit the loop when a valid number is entered
  } else {
    alert("Invalid input. Please enter a valid number.");
  }

  i++;
}*/

/*6.	Create a guessing game where the user has to guess a number between 1 and 100.

var min = 1;  
var max = 100; 
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(randomNumber);


while(true){

var user = prompt("enter a numer");
var num = Number(user);
if(num=== randomNumber){alert("you guessed it right");
break;}
else {alert("try again");}

}

/*
7.	 Use a while & do-while loop to create a countdown timer?

=================================
while
==================================

var timer = prompt("enter  the timer value");

var i = Number(timer);
while(i>0){
console.log(i);
document.write(i + "\n");
i--;


}*/

/*=================================================================
Chapter 46, 48 (Events)
===================================================================

1.	Create a simple event that prints a message when the user clicks on an element.
To be placed in Html file
<input type = "button" value = "click" onclick="alert('hi');"/>*/

/*2.	Create an event that hides an element when the user clicks on a different element
/var b = document.querySelector("button");
b.addEventListener("click",function(){
  b.style.display = "none"; */

/*3.	Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.
var c= document.querySelector("a");
c.addEventListener("mouseover" , function(){
c.style.color = "yellow";
})*/

/*4.	Create an event that scrolls to the top of the page when the user clicks on a link.
var scr = document.querySelector(".Scroll");
scr.addEventListener("click", function(){
window.scrollTo({top:0, behavior:"smooth"});
});*/

/*5.	Create a link that plays a sound when the user clicks on it.
document.getElementById("sound").addEventListener("click",function(){
var clicksnd = document.getElementById("play");
clicksnd.play();
})*/

/*6.	Create a simple link that opens a new window when clicked.
var lnk = document.getElementById("urllink");
lnk.addEventListener("click", function(event){
lnk.setAttribute("target","_blank");
})*/

/*7.	Create a simple button that alert a message when clicked.
var bt =document.querySelector("button");
bt.addEventListener("click", function(){
alert("Cliked!");
})*/

/*8.	Create a button that changes color when the user hovers over it.
var bt = document.querySelector("button");
bt.addEventListener("mouseover",function(){
bt.style.color = "blue";
})*/

/*9.	Create a button that plays a sound when the user clicks on it.
 document.getElementById("sound").addEventListener("click", function(){
 var audio = document.getElementById("play");
audio.play();
});*/

/*10.	Create an event that alert a message when the user moves the mouse over an element 
var a = document.querySelector("button");
a.addEventListener("mouseover", function(){
alert("Login");
})*/

/*11.	Create an event that hides an element when the user moves the mouse out of it.
var a = document.querySelector("button");
a.addEventListener("mouseover" , function(){
a.style.display ="none";
})*/

/*12.	 Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks
 on a close button in the new window. The size of the new window should be determined by the user's mouse position.
 document.getElementById("openWindowLink").addEventListener("click", function(e) {
      e.preventDefault();
      const width = e.clientX + 50; 
      const height = e.clientY + 50; 
      const newWindow = window.open("", "_blank", `width=${width},height=${height}`);
       newWindow.document.write('<button id="closeWindowButton">Close Window</button>');
       newWindow.document.getElementById("closeWindowButton").addEventListener("click", function() {
        newWindow.close(); // Close the new window
      });
    });*/
 
/*==================================================
Chapter 49, 50 (Reading and Setting field values)
====================================================

 /*1 Get the input element with the id "text"
var inp = document.getElementById("text");

// Get the value of the input
var inputtxt = inp.value;

// Print the value to the console
console.log(inputtxt);



/*2.	Read the value of a checkbox and print it to the console

var inp = document.getElementById("chk");

// Get the value of the input
var inputtxt = inp.value;

// Print the value to the console
console.log(inputtxt);

*/



/*3.	Read the value of a select box and print it to the console.

var selectElement = document.getElementById("selectBox");
var selectedValue = selectElement.value;
console.log(selectedValue);
*/



/* 4.	Place some text in a field. Make up an id for the field.



<input type="text" id="myCustomField" value="This is some text in the field">





5.	Ask the user about Martial Status. If the variable married is false, place the value "available" in the field with the id "status"

<label for="maritalStatus">Are you married?</label>
<select id="maritalStatus">
  <option value="married">Yes</option>
  <option value="single">No</option>
</select>

<input type="text" id="status">

<script>
document.getElementById("maritalStatus").addEventListener("change", function() {
  var selectedValue = this.value;
  var statusField = document.getElementById("status");

  if (selectedValue === "single") {
    statusField.value = "available";
  } else {
    statusField.value = ""; // Clear the field if married
  }
});
</script>

6.	If a input is empty, fill it with a string.

<label for="maritalStatus">Are you married?</label>
<select id="maritalStatus">
  <option value="married">Yes</option>
  <option value="single">No</option>
</select>

<input type="text" id="status">

<script>
document.getElementById("maritalStatus").addEventListener("change", function() {
  var selectedValue = this.value;
  var statusField = document.getElementById("status");

  if (selectedValue === "single") {
    statusField.value = "available";
  } else {
    statusField.value = ""; // Clear the field if married
  }
});
</script>




7.	Create a Registeration Form with Validation.


<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
</head>
<body>
  <h2>Registration Form</h2>
  <form id="registrationForm" onsubmit="return validateForm()">
    <label for="username">Username:</label>
    <input type="text" id="username" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" required><br>

    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" required><br>

    <input type="submit" value="Register">
  </form>

  <p id="errorText" style="color: red;"></p>

  <script>
    function validateForm() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      var errorText = document.getElementById("errorText");

      if (password !== confirmPassword) {
        errorText.textContent = "Passwords do not match!";
        return false;
      }

      
      return true;
    }
  </script>
</body>
</html>*/

/*Chapter 51 (Reading and Setting paragraph text)
1.	How can I create a paragraph that expands when the user clicks on a Show More?
<div id="expandable-paragraph">
  <p>
    This is the initial content of the paragraph. It can be as long as you like.
    <span id="additional-text" style="display: none;">
      This is the additional content that is hidden by default. It will be shown when you click "Show More."
    </span>
  </p>
  <button onclick="toggleText()">Show More</button>
</div>
function toggleText() {
  var additionalText = document.getElementById("additional-text");
  var showMoreButton = document.querySelector("button");

  if (additionalText.style.display === "none" || additionalText.style.display === "") {
    additionalText.style.display = "inline"; // Show the additional text
    showMoreButton.textContent = "Show Less"; // Change button text
  } else {
    additionalText.style.display = "none"; // Hide the additional text
    showMoreButton.textContent = "Show More"; // Change button text
  }
}

2.	Read the text of a paragraph and use it to search for a specific word or phrase.
<p id="myParagraph">
  This is a sample paragraph containing some text. We will search for a specific word or phrase in this paragraph.
</p>

<input type="text" id="searchInput" placeholder="Enter word or phrase">
<button onclick="searchText()">Search</button>

<p id="searchResult"></p>

function searchText() {
  var paragraph = document.getElementById("myParagraph");
  var searchInput = document.getElementById("searchInput");
  var searchResult = document.getElementById("searchResult");

  var text = paragraph.textContent; // Get the text content of the paragraph
  var searchTerm = searchInput.value.toLowerCase(); // Get the search term from the input

  if (text.toLowerCase().includes(searchTerm)) {
    searchResult.textContent = 'The word or phrase was found in the paragraph.';
  } else {
    searchResult.textContent = 'The word or phrase was not found in the paragraph.';
  }
}

3.	Read the text of a paragraph and use it to find the longest word.
<p id="myParagraph">
  This is a sample paragraph containing some text. We will find the longest word in this paragraph.
</p>

<button onclick="findLongestWord()">Find Longest Word</button>

<p id="longestWordResult"></p>

function findLongestWord() {
  var paragraph = document.getElementById("myParagraph");
  var longestWordResult = document.getElementById("longestWordResult");

  var text = paragraph.textContent; // Get the text content of the paragraph
  var words = text.match(/\w+/g); // Extract words using a regular expression

  if (words) {
    var longestWord = words.reduce(function (longest, current) {
      return current.length > longest.length ? current : longest;
    }, "");

    longestWordResult.textContent = 'The longest word in the paragraph is: ' + longestWord;
  } else {
    longestWordResult.textContent = 'No words found in the paragraph.';
  }
}

4.	Set the text of a paragraph to the value of a text field, but only if the value is not empty.
<input type="text" id="textField" placeholder="Enter text">
<button onclick="updateParagraph()">Set Paragraph Text</button>
<p id="outputParagraph">This is the target paragraph.</p>

function updateParagraph() {
  var textField = document.getElementById("textField");
  var outputParagraph = document.getElementById("outputParagraph");
  var inputValue = textField.value;

  if (inputValue.trim() !== "") {
    outputParagraph.textContent = inputValue;
  }
}

5.	Set the text of a paragraph to the value of a text field, but only if the value is equal to a specific word or phrase.
<input type="text" id="textField" placeholder="Enter text">
<button onclick="updateParagraph()">Set Paragraph Text</button>
<p id="outputParagraph">This is the target paragraph.</p>
function updateParagraph() {
  var textField = document.getElementById("textField");
  var outputParagraph = document.getElementById("outputParagraph");
  var inputValue = textField.value;

  if (inputValue.trim() !== "") {
    outputParagraph.textContent = inputValue;
  }
}

6.	Set the text of a paragraph to the value of a text field, but only if the value is less than a certain length.

<input type="text" id="textField" placeholder="Enter text">
<input type="number" id="maxLength" placeholder="Max Length">
<button onclick="updateParagraph()">Set Paragraph Text</button>
<p id="outputParagraph">This is the target paragraph.</p>
function updateParagraph() {
  var textField = document.getElementById("textField");
  var outputParagraph = document.getElementById("outputParagraph");
  var inputValue = textField.value;
  var maxLength = parseInt(document.getElementById("maxLength").value);

  if (inputValue.trim() !== "" && inputValue.length <= maxLength) {
    outputParagraph.textContent = inputValue;
  }
}

*/


/*================================================
Chapter 52 (Manipulating Images and Text)
=================================================
1.	When the user clicks on the sentence, it turns bold.
<p id="mySentence" onclick="makeBold()">Click on this sentence to make it bold.</p>

function makeBold() {
  var sentence = document.getElementById("mySentence");

  // Check if the sentence is currently bold
  if (sentence.style.fontWeight === "bold") {
    // If it's bold, make it normal (non-bold)
    sentence.style.fontWeight = "normal";
  } else {
    // If it's not bold, make it bold
    sentence.style.fontWeight = "bold";
  }
}

2.	How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear.
<div class="image-container" onmouseover="showText()" onmouseout="showImage()">
  <img id="myImage" src="your-image.jpg" alt="Your Image">
  <div id="myText" class="text">Hover over me</div>
</div>

.text {
  display: none;
}

.image-container:hover .text {
  display: block;
}

.image-container:hover #myImage {
  display: none;
}

3.	When the user mouses over the heading, its background turns black, but it retains its original light gray color
<h1 class="hover-heading">Hover over me</h1>
.hover-heading {
  background-color: lightgray;
  transition: background-color 0.3s; /* Add a smooth transition effect 
}

.hover-heading:hover {
  background-color: black;
}

4.	When user hover to a paragraph, Add a underline style to text.
*/
/*Chapter 52 (Swapping Images)
1.	Swap the images when the user clicks on a button.
<img id="image" src="image1.jpg" alt="Image 1">
<button onclick="swapImage()">Swap Image</button>

function swapImage() {
  var imageElement = document.getElementById("image");

  // Check the current image source
  if (imageElement.src.endsWith("image1.jpg")) {
    // If the current image is image1, change it to image2
    imageElement.src = "image2.jpg";
    imageElement.alt = "Image 2";
  } else {
    // Otherwise, change it back to image1
    imageElement.src = "image1.jpg";
    imageElement.alt = "Image 1";
  }
}

*/

 