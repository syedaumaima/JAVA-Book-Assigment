//ASSIGNMENT 3



//Declare a variable called age & assign to it your age. Show your age in an alert box.


var  age  = 23
alert( "I am " + age + " years old.")



// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var start = 0
var start  = ++1 
alert(  start)




var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

//Check if page_view entry is present

if (visitCount) {
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);
 } else {
 visitCount = 1;
localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;




//Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthyear = 2002;
document.write(" My birth year is " + birthyear   +"</br>" ) 

document.write(" Data type of my  declared variable is Number")

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order

// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var Visitorsname = "XYZ"
var Producttitle = "PRODUCT"
var Quantity  = 9


document.write ( Visitorsname + " ordered " + " " + Quantity+ " " +  Producttitle + "  on XYZ clothing store.")

