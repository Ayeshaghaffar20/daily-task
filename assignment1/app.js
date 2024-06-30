
/*Question :01
 Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName.Greet the user using his full name.*/

let userName = prompt("Enter your full Name")
let joinName = userName.split(" ")
let titleCase = []
for (let i = 0; i < joinName.length; i++) {
    titleCase.push(joinName[i][0].toUpperCase() + joinName[i].slice(1).toLowerCase())
}
let result = titleCase.join(" ")
document.write(result + "</br></br>");

/*Question:02
Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser*/


let userChoice = prompt("Enter your favorite mobile phone model");
var countLenght = userChoice.length;
let str = userChoice.split(" ")
document.write("My Favourite Phone is: " + userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase() + "</br>");
document.write("Lenght of String is " + countLenght + "</br></br>")

/*Question:03
Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/

let nationality = "Pakistani"
let findWrord = nationality.indexOf("n")
document.write("Nationality is " + nationality + "</br>")
document.write("The index of the letter 'n' in the word 'Pakistani' is: " + findWrord + "</br></br>");

/*Question:04
Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/


let word = "Hello World"
let lastIndexOf = word.lastIndexOf("l")
document.write("The word " + word + "</br>")
document.write("The last index of the word 'l' in the word 'hello world' is: " + lastIndexOf + "</br ></br >")


/*Question:05
Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser. .*/

let givenWord = "Pakistani"
let findChar = givenWord.charAt(3)
document.write("The Word is " + givenWord + "</br>")
document.write("The character at the 3rd index in the word 'Pakistani' is: " + findChar + "</br ></br >");

/*Question:06
Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.
using string concat() method. .*/


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);
document.write("Hello, " + fullName + "! Nice to meet you." + "</br ></br >");

/*Question:07
Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser. .*/

let city = "Hyderabad"
document.write("City is " + city + "</br>")
let userCity = prompt("Enter your city")
let replaceCity = city.replace(userCity)
document.write("User replace city by " + replaceCity + "</br ></br >")

/*Question:08
Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */



/*Question:09
Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */

let num = "472"
document.write("Value " + num + "</br>")
document.write("Type of " + num + " is " + typeof (num) + "</br>")
document.write("Value " + num + "</br>")
let toNum = parseInt(num, 10)
document.write("Now type of " + num + " is " + typeof (toNum) + "</br ></br >")


/*Question:10
Write a program that takes user input. Convert and
show the input in capital letters. */

let userText = prompt("Enter some text")
document.write("User Input: " + userText + "</br>")
let caseChange = userText.toUpperCase()
document.write("UpperCase: " + caseChange + "</br ></br >")


/*Question:11
Write a program that takes user input. Convert and
show the input in title case. */


let userInput = prompt("Enter your Favourite Language")
document.write("Userinpt: " + userInput + "</br>")
let toArray = userInput.split(" ")
let titledCase = []
for (i = 0; i < toArray.length; i++) {
    titledCase.push(toArray[i][0].toUpperCase() + toArray[i].slice(1).toLowerCase())

}
let final = titledCase.join(" ")
document.write("TileCase: " + final + "</br ></br >")


/*Question:12
Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.. */


let decimalValve = 35.36
document.write("Decimal value is " + decimalValve + "</br>")
let toStr = decimalValve.toString
document.write("Change into string " + toStr + "</br ></br >")






















