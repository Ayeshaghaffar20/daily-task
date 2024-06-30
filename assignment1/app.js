
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
document.write("Hello, " + fullName + "! Nice to meet you.");