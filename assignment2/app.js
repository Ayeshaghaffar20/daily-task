//Question:1
//Write a function that displays current date & time in your browser

let todayDate = new Date()
console.log(todayDate)

//Question:2
//Write a function that takes first & last name and then it greets the user using his full name.

// function yourName() {
//     let firstName = prompt("Enter your first name")
//     let lastName = prompt("Enter your last name")
//     let fullName = firstName + " " + lastName
//     alert("Hello " + fullName)

// }
// yourName()


//Question:2
//Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(num1, num2) {
//     if (typeof num1 == "number" && typeof num2 == "number") {
//         console.log(num1 + num2);
//     }
//     else if (typeof num1 == "string" && typeof num2 == "string") {
//         console.log("give us both number")
//     }
//     else if (typeof num1 == "string") {
//         console.log("give number type data in num1")

//     }
//     else if (typeof num2 == "string") {
//         console.log("give number type data in num2")

//     }

// }

// sum("6", "4")

//Question:05
//Write a function that squares its argument.


// function square(number) {
//     return number * number;
// }


// let input = prompt("Enter a number to be squared:");
// let number = parseFloat(input);
// let squaredNumber = square(number);

// alert("The square of " + number + " is: " + squaredNumber);


//Question:06
//Write a function that computes factorial of a number.

// function factorial() {
// let num = +prompt("Enter a number")
// if (num < 0) {
//     alert("Error: Factorial is not defined for negative numbers")
// }
// else {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i
//     }
//     alert("Th factorial of " + num + " is " + result)
// }
// }
// factorial()





//Question:08
// Write a nested function that computes hypotenuse of a
// right angle triangle.
//     Hypotenuse2 = Base2 + Perpendicular2



// function calculateHypotenuse() {
//     function calculateSquare(x) {
//         return x * x
//     }
//     let base = +prompt("Enter the base of right angle triangle");
//     let perpendicular = +prompt("Enter the perpendicular of right angle triangle");

//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
//     alert("The hypotenuse of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypotenuse)
// }

//Question:9
// Write a function that calculates the area of a rectangle.
//     A = width * height
// Pass width and height in following manner:

// i.Arguments as value
// ii.Arguments as variables


// Prompt user for width and height
// let width = prompt("Enter the width of the rectangle:");
// let height = prompt("Enter the height of the rectangle:");

// function calculateRectangleArea(width, height) {

//     width = parseFloat(width);
//     height = parseFloat(height);

//     let area = calculateRectangleArea(width, height);

//     alert("The area of the rectangle is: " + area);

//     return width * height;
// }


//Question:11
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING: 'the quick brown fox'
// EXPECTED OUTPUT: 'The Quick Brown Fox'


function change() {
    let userName = prompt("Enter any Sentence")
    let joinName = userName.split(" ")
    let titleCase = []
    for (let i = 0; i < joinName.length; i++) {
        titleCase.push(joinName[i][0].toUpperCase() + joinName[i].slice(1).toLowerCase())
    }
    let result = titleCase.join(" ")
    document.write(result + "</br></br>");
}
change()
